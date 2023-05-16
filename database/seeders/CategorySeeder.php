<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        collect([
            ['name' => $name = "Makanan", 'slug' => str($name)->slug()],
            ['name' => $name = "Minuman", 'slug' => str($name)->slug()],
            ['name' => $name = "Lainnya", 'slug' => str($name)->slug()],
        ])->each(fn ($category) => Category::create($category));
    }
}
