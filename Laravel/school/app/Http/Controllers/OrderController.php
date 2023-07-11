<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Order;
use App\Models\OrdersProduct;
use DB;
use Session;

class OrderController extends Controller
{
    public function showOrder(string $id)
    {
        $check_order = Order::query()
            ->select('order_id')
            ->where('order_id', '=', $id)
            ->where('user_id', '=', Session::get('user_id'))
            ->get();

        if (count($check_order) > 0) {
            $order_info = Order::query()
                ->select('order_id', 'time_placed', 'status')
                ->where('order_id', '=', $id)
                ->get()
                ->first();
            $ordered_products = Order::query()
                ->select('orders.order_id', 'quantity', 'name', 'price', 'image')
                ->join('orders_products', 'orders.order_id', '=', 'orders_products.order_id')
                ->join('products', 'orders_products.product_id', '=', 'products.product_id')
                ->where('orders.order_id', '=', $id)
                ->get();

            return view('show_order', compact('order_info', 'ordered_products'));
        } else {
            abort(401);
        }
    }

    public function showOrders()
    {
        $orders = Order::query()
            ->select('orders.order_id', 'time_placed', 'status', DB::raw("SUM(price) AS total_price"))
            ->join('orders_products', "orders_products.order_id", "=", "orders.order_id")
            ->join("products", "orders_products.product_id", "=", "products.product_id")
            ->where('user_id', '=', Session::get('user_id'))
            ->groupBy('orders.order_id')
            ->get();

        return view('my_orders', compact("orders"));
    }

    public function placeOrder(Request $request)
    {
        $order = new Order;
        $order->user_id = Session::get('user_id');
        $order->save();

        $p = Product::query()
            ->select('product_id', 'name', 'price', 'image')
            ->where('stock', '>', '0')
            ->get();

        for ($i = 0; $i < count($p); $i++) {
            $ordered = $request->input('order_' . str($p[$i]->product_id));
            if ($ordered > 0) {
                $op = new OrdersProduct();
                $op->order_id = $order->order_id;
                $op->product_id = $p[$i]->product_id;
                $op->quantity = $ordered;
                $op->save();
            }
        }

        return view('cafeteria_success', compact('order'));
    }

    public function takeOrder(Request $request)
    {
        if (Session::has('user_id')) {
            $p = Product::query()
                ->select('product_id', 'name', 'price', 'image')
                ->where('stock', '>', '0')
                ->get();
            $sp = array();
            $total = 0;
            for ($i = 0; $i < count($p); $i++) {
                if (intval($request->input('order_' . str($p[$i]->product_id))) > 0) {
                    $total += $p[$i]->price * $request->input('order_' . str($p[$i]->product_id));
                }
                array_push($sp, $request->input('order_' . str($p[$i]->product_id)));
            }

            return view('cafeteria_receipt', compact('p', 'sp', 'total', 'request'));
        } else {
            return redirect('/login')->with('fail', 'You must login first!');
        }
    }

    public function showCafeteria()
    {
        $menu = Product::query()
            ->select(DB::raw('*'))
            ->where('stock', '>', '0')
            ->get();
        return view('cafeteria', compact('menu'));
    }
}
