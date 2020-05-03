<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CommentController extends Controller {
    //
    public function index() {
        return view('comments');
    }

    public function fetchCommetns() {
        $comments = COmments::all();
        return response()->json($comments);
    }

    public function store(Request $request) {
        $comment - Commeent::create($request->all());

        event(new CommentEvent($comment));
        return response()->json('ok');
    }
}
