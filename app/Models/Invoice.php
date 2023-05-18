<?php

namespace App\Models;

use App\Traits\HasManyCarts;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Invoice extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $cast = [
        "succeeded_at" => 'datetime',
    ];
}
