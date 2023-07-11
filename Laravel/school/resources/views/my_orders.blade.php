<html lang="en">

<head>
    @include('layouts/head')
    <title>My Orders</title>
</head>

<body>
    @include('layouts/navbar')
    <h1>My Orders</h1>
    <table class="table">
        <tr>
            <th>Order ID</th>
            <th>Time placed</th>
            <th>Status</th>
            <th>Total Price</th>
            <th>More Info</th>
        </tr>
        @foreach ($orders as $o)
        <tr>
            <td>{{$o->order_id}}</td>
            <td>{{$o->time_placed}}</td>
            <td>{{$o->status}}</td>
            <td>PHP {{$o->total_price}}</td>
            <td><a class="btn btn-warning" href="/order/{{$o->order_id}}">More info</a></td>
        </tr>
        @endforeach
    </table>
</body>

</html>