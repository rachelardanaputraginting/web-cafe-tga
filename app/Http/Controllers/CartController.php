<?php

namespace App\Http\Controllers;

use App\Http\Resources\CartResource;
use App\Models\Cart;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class CartController extends Controller
{

    public function store(Request $request, Product $product)
    {
        $product->carts()->updateOrCreate(
            [
                "user_id" => $request->user()->id,
                "product_id" => $product->id
            ],
            [
                "user_id" => $request->user()->id,
                "price" => $product->price,
            ]
        );

        $cart = Cart::where('user_id', $request->user()->id)->where('product_id', $product->id)->whereNull('paid_at')->first();

        if ($cart->quantity >= 0) {
            $cart->update([
                "quantity" => ++$cart->quantity,
                "price" => $cart->price * $cart->quantity,
            ]);
        }

        return redirect()->back();
    }

    public function index(Request $request)
    {
        $carts = Cart::query()
            ->select('id', 'name', 'price', 'quantity')
            ->with('product')
            ->whereBelongsTo($request->user())->whereNull('paid_at')->get();
        return inertia('Carts/Index', [
            "carts" => CartResource::collection($carts)
        ]);
    }

    public function destroy(Cart $cart)
    {
        $cart->delete();

        return back();
    }
}
