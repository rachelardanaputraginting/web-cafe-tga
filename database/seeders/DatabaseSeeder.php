<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {

        \App\Models\Table::create([
            'name' => 'Table 1',
            'slug' => 'table-1',
            'status' => '1',
        ]);
        \App\Models\Table::create([
            'name' => 'Table 2',
            'slug' => 'table-2',
            'status' => '1',
        ]);
        \App\Models\Table::create([
            'name' => 'Table 3',
            'slug' => 'table-3',
            'status' => '1',
        ]);

        \App\Models\User::factory()->create([
            'name' => 'Rachel Ardana Putra Ginting',
            'email' => 'rachelginting@gmail.com',
            'password' => bcrypt('password'),
        ]);

        $this->call([
            CategorySeeder::class,
        ]);

        \App\Models\Product::factory(50)->create();
    }
}
