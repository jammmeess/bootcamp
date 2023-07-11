<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\FacultyController;
use App\Http\Controllers\SubjectController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\OrderController;

////////////PUBLIC SIDE////////////

Route::get('/', function () {
    return view('home');
});

Route::get('/about', function () {
    return view('about');
});

Route::get('/login', [UserController::class, 'showLogin']);
Route::post('/login', [UserController::class, 'login']);

////////////USER SIDE////////////

Route::get('/logout', [UserController::class, 'logout']);

Route::get('/profile', [UserController::class, 'showProfile']);

Route::get('/order', [OrderController::class, 'showOrders']);
Route::get('/order/{id}', [OrderController::class, 'showOrder']);
Route::get('/cafeteria', [OrderController::class, 'showCafeteria']);
Route::post('/cafeteria', [OrderController::class, 'takeOrder']);
Route::post('/cafeteria/checkout', [OrderController::class, 'placeOrder']);

////////////ADMIN SIDE////////////

Route::get('/admin', function () {
    return view('admin_dashboard');
});

Route::get('/admin/register', [UserController::class, 'showRegister']);
Route::post('/admin/register', [UserController::class, 'register']);

Route::resource('/admin/subjects', SubjectController::class);
// Route::get('/subjects/transfer', [StudentController::class, 'transferSubject']);

Route::get('/admin/students', [StudentController::class, 'index']);
Route::get('/admin/students/{id}', [StudentController::class, 'show']);

Route::get('/admin/faculties', [FacultyController::class, 'index']);
