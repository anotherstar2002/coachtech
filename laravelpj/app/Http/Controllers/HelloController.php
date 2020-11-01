<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HelloController extends Controller
{
    public function index ()
    {
        $data = [ 
                "content" => "input any comment",
            ];
        return view ("hello.index", $data);
    }
    
    public function post(Request $request)
    {
        $content = $request ->content;
        $data = [
            "content" => $content ."you input don't you?"
        ];
        return view("hello.index", $data);
    }
       
}