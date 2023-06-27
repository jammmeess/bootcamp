<?php

use App\Http\Controllers\FacultiesController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StudentController;
use App\http\Controllers\SubjectController;

Route::get("/", function () {
    return view("home");
});

Route::get("/about", function () {
    return view("about");
});

Route::get("/faculties", [FacultiesController::class, "index"]);
Route::resource("/subjects", SubjectController::class);

Route::get("/students", [StudentController::class, "index"]);
Route::get("/students/{id}", [StudentController::class, "show"]);
