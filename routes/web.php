<?php

use App\Http\Controllers\AdminProductController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\InvoiceController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ScanController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::resource('products', ProductController::class);

Route::get('scan', [ScanController::class, 'index'])->name('scan.index');


Route::get('admin/products/create', [AdminProductController::class, 'create'])->name('admin.products.create');
Route::post('admin/products/store', [AdminProductController::class, 'store'])->name('admin.products.store');
Route::get('admin/products/table', [AdminProductController::class, 'table'])->name('admin.products.table');
Route::get('admin/products/show/{product:slug}', [AdminProductController::class, 'show'])->name('admin.products.show');
Route::get('admin/products/edit/{product:slug}', [AdminProductController::class, 'edit'])->name('admin.products.edit');
Route::put('admin/products/update/{product:slug}', [AdminProductController::class, 'update'])->name('admin.products.update');
Route::delete('admin/products/destroy/{product:slug}', [AdminProductController::class, 'destroy'])->name('admin.products.destroy');
Route::get('admin/products/qrcode', [AdminProductController::class, 'qrcode'])->name('admin.products.qrcode');

Route::controller(CartController::class)->group(function () {
    Route::get('/carts', 'index')->name('cart.index');
    Route::delete('/carts/delete/{cart}', 'destroy')->name('cart.delete');
    Route::post('/carts/add_to_cart/{product:slug}', 'store')->name('cart.store');
});

Route::controller(InvoiceController::class)->middleware('auth')->group(function () {
    Route::post('/invoice', 'store')->name('invoice.store');
    Route::get('/invoices', 'invoice')->name('invoice.index');
    Route::get('/invoice/{invoice:order_id}', 'show')->name('invoice.show');
});

Route::middleware('auth')->group(function () {

    Route::get('/', [HomeController::class, 'index'])->name('name');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
