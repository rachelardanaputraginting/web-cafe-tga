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
        // dd($request->payment_type);
        $cart_ids = $request->collect('carts')->pluck('id');
        $order_id = 'order-' . $request->user()->id . $cart_ids->implode('');

        // dd($cart_ids);
        $invoiceExists = Invoice::where('order_id', $order_id)->firstOr(fn () => false);
        if ($invoiceExists) {
            return to_route('invoice.show', $invoiceExists);
        } else {
            $invoice = Auth::user()->invoices()->updateOrcreate(compact('order_id'), [
                'order_id' => $order_id,
                'total_price' => $total,
                'card_ids' => $cart_ids,
            ]);
            // $invoice_order_id = Invoice::where('order_id', $order_id)->first();
            $invoice->update([
                "succeeded_at" => now(),
                'status' => 1,
            ]);


            $card = Cart::whereIn('id', $cart_ids);
            $card->update([
                'paid_at' => now(),
            ]);
        }
        return back();
    }

    public function show(Invoice $invoice)
    {
        return inertia('Invoice/Show', [
            "invoice" => new InvoiceResource($invoice),
        ]);
    }
}
