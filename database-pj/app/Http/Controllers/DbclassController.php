<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DbclassController extends Controller
{
    public function index(Request $request)
    {
        // DBファサードの場合：$items = DB::select('select * from people');
        $items = DB::table('people')->get();
        return view('db', ['items' => $items]);
    }
    public function add(Request $request)
    {
        return view('add');
    }
    public function create(Request $request)
    {
        $param = [
            'id' => $request->id,
            'name' => $request->name,
            'age' => $request->age,
        ];
        //DBファサード： DB::insert('insert into people (id, name, age) values (:id, :name, :age)', $param);
        DB::table('people')->insert($param);
        return redirect('/');
    }
    public function edit(Request $request)
    {
        // $param = ['id' => $request->id];
        //DBファサード $item = DB::select('select * from people where id = :id', $param);
        $item = DB::table('people')->where('id', $request->id)->first();
        return view('edit', ['form' => $item]);
    }
    public function update(Request $request)
    {
        $param = [
            'id' => $request->id,
            'name' => $request->name,
            'age' => $request->age,
        ];
        //DBファサード DB::update('update people set name =:name, age =:age where id =:id', $param);
        DB::table('people')->where('id', $request->id)->update($param);
        return redirect('/');
    }
    public function delete(Request $request)
    {
        // $param = ['id' => $request -> id];
        //DBファサード $item = DB::select('select * from people where id = id', $param);
        $item = DB::table('people')->where('id',$request->id)->first();
        return view ('delete', ['form' => $item[0]]);
    }
    public function remove(Request $request)
    {
        // $param = ['id' => $reqeust->id];
        //DBファサード DB::delete('delete from people where id= :id', $param);
        DB::table('people')->where('id', $request->id)->delete();
        return redirect('/');
    }
}