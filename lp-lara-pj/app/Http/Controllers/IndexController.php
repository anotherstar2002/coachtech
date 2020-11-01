<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use PhpParser\Node\Expr\FuncCall;

class IndexController extends Controller
{
    public function index()
    {
        $data = [
            "ビジネスA" => "ビジネスの説明が入ります。ビジネスの説明が入ります。ビジネスの説明が入ります。ビジネスの説明が入ります。",
            "ビジネスB" => "ビジネスの説明が入ります。ビジネスの説明が入ります。ビジネスの説明が入ります。ビジネスの説明が入ります。",
            "ビジネスC" => "ビジネスの説明が入ります。ビジネスの説明が入ります。ビジネスの説明が入ります。ビジネスの説明が入ります。",
        ];
        return view("home", ["info" => $data]);
    }
    public function post()
    {
        return view ("finish");
    }
}
