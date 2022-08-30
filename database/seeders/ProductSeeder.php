<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('products')->insert([[
            'name' => 'Samsung A51',
            'description' => 'Best samsung middle class mobile phone',
            'price' => '280',
            'manufacturer_id' => '1'
        ], [
            'name' => 'Samsung S21+',
            'description' => 'Best samsung and best android phone',
            'price' => '1300',
            'manufacturer_id' => '1'
        ], [
            'name' => 'Xiaomi Mi Note 10 Lite',
            'description' => 'Best mobile phone for middle class',
            'price' => '300',
            'manufacturer_id' => '5'
        ], [
            'name' => 'Huawei P40+',
            'description' => 'Mobile with best camera',
            'price' => '700',
            'manufacturer_id' => '4'
        ], [
            'name' => 'iPhone XI',
            'description' => 'Apple flagsnip mobile phone',
            'price' => '1100',
            'manufacturer_id' => '3'
        ]]);
    }
}
