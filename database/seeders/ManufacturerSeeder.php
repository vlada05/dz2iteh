<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class ManufacturerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('manufacturers')->insert([[
            'name' => 'Samsung',
            'country' => 'South Korea'
        ], [
            'name' => 'Nokia',
            'country' => 'Finnish'
        ], [
            'name' => 'iPhone',
            'country' => 'USA'
        ], [
            'name' => 'Huawei',
            'country' => 'China'
        ], [
            'name' => 'Xiaomi',
            'country' => 'China'
        ]]);
    }
}
