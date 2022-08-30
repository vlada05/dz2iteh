<?php

namespace App\Http\Controllers;

use App\Http\Requests\SaveProductRequest;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = Product::all();
        return response()->json(['products' => $products, 'status' => 200]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(SaveProductRequest $request)
    {
        $product = new Product();
        $product->name = $request->name;
        $product->description = $request->description;
        $product->price = $request->price;
        $product->manufacturer_id = $request->manufacturer_id;
        $product_save = $product->save();
        if ($product_save) {
            return response()->json(['product' => $product, 'status' => 200]);
        } else {
            return response()->json(['product' => 'ERROR WHILE SAVING PRODUCT!', 'status' => 400]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $product = Product::find($id);
        return response()->json(['product' => $product, 'status' => 200]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $product = Product::find($id);
        $product->name = $request->name;
        $product->description = $request->description;
        $product->price = $request->price;
        $product->manufacturer_id = $request->manufacturer_id;
        $product_update = $product->save();
        if ($product_update) {
            return response()->json(['product' => $product, 'status' => 200]);
        } else {
            return response()->json(['product' => 'ERROR WHILE UPDATING PRODUCT', 'status' => 400]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $product = Product::find($id);
        $product_delete = $product->delete();
        if ($product_delete) {
            return response()->json(['product' => $product, 'status' => 200]);
        } else {
            return response()->json(['product' => 'ERROR WHILE DELETING PRODUCT', 'status' => 400]);
        }
    }
}
