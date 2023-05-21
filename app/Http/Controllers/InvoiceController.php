<?php

namespace App\Http\Controllers;

use App\Http\Resources\InvoiceResource;
use App\Models\Cart;
use App\Models\Invoice;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class InvoiceController extends Controller
{
    public function store(Request $request)
    {
        $total = (int) $request->total;
        $cart_ids = $request->collect('carts')->pluck('id');
        $order_id = 'order-' . $request->user()->id . $cart_ids->implode('');
        $table_id = $request->id;
        // $invoiceExists = Invoice::where('order_id', $order_id)->firstOr(fn () => false);
        // if ($invoiceExists) {
        //     return to_route('products.index');
        // } else {
        // $invoce = Invoice::where('table_id', $table_id)->first();
        Cart::where('table_id', 0)->update([
            'status' => 1,
            'paid_at' => now(),
            'table_id' => $table_id,
        ]);

        $total_price = Cart::where('table_id', $table_id)->get()->sum('price');
        $invoice = Auth::user()->invoices()->updateOrcreate(compact('table_id'), [
            'order_id' => $order_id,
            'total_price' => $total_price,
            // 'card_ids' => $cart_ids,
            'table_id' => $table_id,
        ]);
        // $invoice_order_id = Invoice::where('order_id', $order_id)->first();
        // $card = Cart::where('table_id', $table_id)->first();

        $invoice->update([
            "succeeded_at" => now(),
        ]);



        return back();
    }

    public function invoice()
    {
        $invoice = Invoice::query()
            ->where('user_id', Auth::user()->id)
            ->select('id', 'user_id', 'total_price', 'table_id', 'order_id', 'status', 'succeeded_at')
            ->latest()
            ->paginate(12)
            ->withQueryString();
        return inertia('Invoices/Table', [
            'invoices' => InvoiceResource::collection($invoice)
        ]);
    }

    public function update(Request $request, Invoice $invoice)
    {
        $invoice->where('id', $request->id)->update([
            "status" => 1
        ]);
    }
}
