<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Invoice;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {

        $product = Product::query()->count();
        $cart = Cart::whereBelongsTo($request->user())->count();

        $invoice = Invoice::query()
            ->where('user_id', Auth::user()->id)->count();

        return inertia('Dashboard', [
            "product" => $product,
            "cart" => $cart,
            "invoice" => $invoice,
        ]);
    }
}
