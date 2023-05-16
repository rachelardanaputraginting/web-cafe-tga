<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductResource;
use App\Http\Resources\ProductSingleResource;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $products = Product::query()
            ->with('category')
            ->when($request->category, fn ($q, $v) => $q->whereBelongsTo(Category::where('slug', $v)->first()))
            ->select('name', 'slug', 'category_id', 'price', 'picture')
            ->paginate(12)
            ->withQueryString();

        return inertia('Products/Index', [
            "products" => ProductResource::collection($products),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ProductController  $productController
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        return inertia('Products/Show', [
            "product" => ProductSingleResource::make($product->load('category')),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ProductController  $productController
     * @return \Illuminate\Http\Response
     */
    public function edit(ProductController $productController)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ProductController  $productController
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ProductController $productController)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ProductController  $productController
     * @return \Illuminate\Http\Response
     */
    public function destroy(ProductController $productController)
    {
        //
    }
}
