<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class CartResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            "id" => $this->id,
            "price" => $this->price,
            "product" => [
                "name" => $this->product->name,
                "slug" => $this->product->slug,
                "picture" => $this->product->picture ? Storage::url($this->product->picture) : 'https://fakeimg.pl/200x320/?text=Cafe&font=noto',
            ]
        ];
    }
}
