<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductTableResource;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use SimpleSoftwareIO\QrCode\Facades\QrCode;

class AdminProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public $categories;

    public function __construct()
    {
        $this->categories = Category::select('id', 'name')->get();
    }

    public function table(Request $request)
    {
        $products = Product::query()
            ->with([
                "category" => fn ($query) => $query->select('name', 'slug', 'id'),
            ])
            ->latest()
            ->paginate(10);

        // return ArticleTableResource::collection($products);

        return inertia('Admin/Products/Table', [
            "products" => ProductTableResource::collection($products),
        ]);
    }

    public function qrcode()
    {
        $data = Product::all();
        // dd($data);
        $qrCodes = [];

        foreach ($data as $item) {
            if ($item->slug) {
                $qrCode = QrCode::size(300)->generate($item->slug);
                $qrCodes[] = $qrCode->toHtml();
            }
        }

        // dd($qrCodes);

        return inertia('Admin/Products/QRCode', ['qrCodes' => $qrCodes]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function create()
    {
        return inertia('Admin/Products/Create', [
            "categories" => $this->categories,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $picture = $request->file('picture');
        Product::create([
            "name" => $request->name,
            "slug" => $slug = str($request->name . '-' .  rand(10, 100))->slug(),
            "category_id" => $request->category_id['id'],
            "price" => $request->price,
            "description" => $request->description,
            "picture" => $request->hasFile('picture') ? $picture->storeAs('images/products', $slug . '.' . $picture->extension()) : null
        ]);

        return to_route('admin.products.table');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit(Product $product)
    {
        return inertia('Admin/Products/Edit', [
            "product" => $product->load([
                'category' => fn ($query) => $query->select('id', 'name')
            ]),
            "categories" => $this->categories,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {
        $picture = $request->file('picture');
        $product->update([
            "name" => $request->name,
            "slug" => str($request->name . '-' .  rand(10, 100))->slug(),
            "category_id" => $request->category_id['id'],
            "price" => $request->price,
            "description" => $request->description,
            "picture" => $request->hasFile('picture') ? $picture->storeAs('images/products', $product->slug . '.' . $picture->extension()) : $product->picture
        ]);

        return to_route('admin.products.table');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        if ($product->picture) {
            Storage::delete($product->picture);
        }

        $product->delete();
        return back();
    }
}
