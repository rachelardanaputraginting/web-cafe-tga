<?php

namespace App\Http\Controllers;

use App\Http\Resources\CartResource;
use App\Models\Cart;
use App\Models\Invoice;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;

class CartController extends Controller
{

    public function store(Request $request, Product $product)
    {
        // $product->carts()->updateOrCreate(
        //     [
        //         "user_id" => $request->user()->id,
        //         "product_id" => $product->id
        //     ],
        //     [
        //         "user_id" => $request->user()->id,
        //         "price" => $product->price,
        //     ]
        // );

        $cart = Cart::where('user_id', $request->user()->id)->where('product_id', $product->id)->where('status', 0)->whereNull('paid_at')->first();
        if ($cart) {
            $cart->update([
                "user_id" => $request->user()->id,
                "product_id" => $product->id,
                "quantity" => ++$cart->quantity,
                "price" => $cart->price * $cart->quantity,
            ]);
        } else {
            Cart::create([
                "user_id" => $request->user()->id,
                "product_id" => $product->id,
                "quantity" => 1,
                "price" => $product->price,
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
