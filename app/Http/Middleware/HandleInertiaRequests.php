<?php

namespace App\Http\Middleware;

use App\Models\Cart;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Storage;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;
use Illuminate\Support\Str;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $cart_global_count = $request->user() ? Cart::whereBelongsTo($request->user())->whereNull('paid_at')->count() : null;
        Cache::flush();
        return array_merge(parent::share($request), [
            'auth' => [
                'user' => $request->user(),
            ],
            'ziggy' => function () use ($request) {
                return array_merge((new Ziggy)->toArray(), [
                    'location' => $request->url(),
                ]);
            },
            'categories_global' => $request->user() ? Cache::rememberForever('categories_global', fn () => Category::whereHas('products')->get()->map(fn ($q) => [
                "name" => $q->name,
                "slug" => $q->slug,
            ])) : 0,

            'carts_global' => $request->user() ?
                Cache::rememberForever('carts_global', fn () => Cart::query()
                    ->with('product')
                    ->whereBelongsTo($request->user())
                    ->whereNull('paid_at')
                    ->get()->map(fn ($q) => [
                        "id" => $q->id,
                        "price" => $q->price,
                        "quantity" => $q->quantity,
                        "product" => [
                            "name" => $q->product->name,
                            "slug" => $q->product->slug,
                            "quantity" => $q->product->quantity,
                            "price" => $q->product->price,
                            "description" => Str::limit($q->product->description, 120, '...'),
                            "picture" => $q->product->picture ? Storage::url($q->product->picture) : 'https://fakeimg.pl/200x320/?text=Cafe&font=noto',
                        ]
                    ])) : 0,
            'carts_global_count' => $cart_global_count,
        ]);
    }
}
