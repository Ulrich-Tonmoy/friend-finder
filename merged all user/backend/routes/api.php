<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController2;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController3;
use App\Http\Controllers\BusinessController;
use App\Http\Controllers\CommunityController;
use App\Http\Controllers\TotalContoller;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\AnnouncementController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// User
Route::post('/login', 'LoginController@login');
Route::post('/logout', 'LoginController@logout');
Route::post('/registration', 'RegiController@create');
Route::post('/google', 'LoginController@google');

Route::get('/getPost', 'UserController@getPost');
Route::get('/deletePost/{id}', 'UserController@deletePost');
Route::get('/getUser', 'UserController@getUser');
Route::get('/getUser/{id}', 'UserController@getUserById');
Route::post('/createPost', 'UserController@post');
Route::post('/updateUser', 'UserController@updateUser');
Route::get('/removeReactPost', 'UserController@removeReactPost');
Route::get('/reactPost', 'UserController@reactPost');
Route::get('/getAllFriends/{id}', 'UserController@getAllFriends');
Route::get('/getActiveFriends/{id}', 'UserController@getActiveFriends');

// Job
Route::post('/addjob', 'JobController@addjob');
Route::get('/joblist', 'JobController@joblist');
Route::get('/joblist/{id}', 'JobController@jobdetails');
Route::get('/updatejob/{id}', 'JobController@updatejob');
Route::post('updatejob/{id}', 'JobController@editjob');
Route::delete('removejob/{id}', 'JobController@removejob');
Route::post('/jobsearch', 'JobController@jobsearch');
Route::post('adduser/', 'JobController@adduser');
Route::post('/jobapply/{id}', 'JobController@jobapply');

// business
Route::post('/register', [UserController2::class, 'register']);
Route::post('/login', [UserController2::class, 'login']);

Route::post('/addproduct', [ProductController::class, 'addProduct']);
Route::get('/list', [ProductController::class, 'list']);
Route::delete('/delete/{id}', [ProductController::class, 'delete']);
Route::get('product/{id}', [ProductController::class, 'getProduct']);
Route::put('updateproduct/{id}', [ProductController::class, 'updateProduct']);
Route::get('search/{key}', [ProductController::class, 'search']);


// Admin
Route::post('/login', [AuthController::class, 'login']);
Route::get('/announcement/search/{announcement_name}', [AnnouncementController::class, 'search']);
// Protected Routes
Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    // Users
    Route::get('/users', [UserController3::class, 'index']);
    Route::get('/user/edit/{id}', [UserController3::class, 'show']);
    Route::put('/user/edit/{id}', [UserController3::class, 'update']);
    Route::delete('/user/delete/{id}', [UserController3::class, 'destroy']);
    Route::put('/user/action/{id}', [UserController3::class, 'action']);
    // Business
    Route::get('/businesses', [BusinessController::class, 'index']);
    Route::get('/business/edit/{id}', [BusinessController::class, 'show']);
    Route::put('/business/edit/{id}', [BusinessController::class, 'update']);
    Route::delete('/business/delete/{id}', [BusinessController::class, 'destroy']);

    // Community
    Route::get('/communities', [CommunityController::class, 'index']);
    Route::get('/community/edit/{id}', [CommunityController::class, 'show']);
    Route::put('/community/edit/{id}', [CommunityController::class, 'update']);
    Route::delete('/community/delete/{id}', [CommunityController::class, 'destroy']);

    // Total
    Route::get('/total', [TotalContoller::class, 'index']);

    // Task

    Route::post('/task', [TaskController::class, 'store']);
    Route::get('/task/edit/{id}', [TaskController::class, 'show']);
    Route::put('/task/edit/{id}', [TaskController::class, 'update']);
    Route::delete('/task/delete/{id}', [TaskController::class, 'destroy']);
    Route::get('/tasks', [TaskController::class, 'index']);

    // Announcement
    Route::post('/announcement', [AnnouncementController::class, 'store']);
    Route::get('/announcementlist', [AnnouncementController::class, 'index']);
});

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
