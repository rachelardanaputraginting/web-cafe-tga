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

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

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
