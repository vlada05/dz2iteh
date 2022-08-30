<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Database\Seeders\ManufacturerSeeder;
use Database\Seeders\ProductSeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(ManufacturerSeeder::class);
        $this->call(ProductSeeder::class);
    }
}
