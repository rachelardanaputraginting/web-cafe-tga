<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductTableResource;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;

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
            "name" => $name = $request->name,
            "slug" => $slug = str($name)->slug(),
            "category_id" => $request->category_id,
            "price" => $request->price,
            "quantity" => $request->quantity,
            "description" => $request->description,
            "picture" => $request->hasFile('picture') ? $picture->storeAs('images/products', $slug . '.' . $picture->extension()) : null
        ]);

        return back();
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
        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        //
    }
}
