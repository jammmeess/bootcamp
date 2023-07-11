<html lang="en">

<head>
    @include('layouts/head')
    <title>Show Order</title>
</head>

<body>

    <div class="container-fluid">
        @include('layouts/navbar')
        <h1>Show Order</h1>
        <p>Order ID: {{$order_info->order_id}} ({{$order_info->time_placed}})</p>
        <p>Status: {{$order_info->status}}</p>
        <h1>Items Ordered</h1>
        <div class="row">
            <div class="col-lg-6">
                <table class="table">
                    <tr>
                        <th>Item</th>
                        <th>Info</th>
                    </tr>
                    @foreach ($ordered_products as $op)
                    <tr>
                        <td rowspan="4"><img src="/img/{{$op->image}}" width="100px" /></td>
                        <td><b>Name: {{$op->name}}</b></td>
                    </tr>
                    <tr>
                        <td>Price: PHP {{$op->price}}</td>
                    </tr>
                    <tr>
                        <td>Quantity: {{$op->quantity}}</td>
                    </tr>
                    <tr>
                        <td>Total price: PHP {{$op->price * $op->quantity}}</td>
                    </tr>
                    @endforeach

                </table>
            </div>
        </div>
    </div>
</body>

</html>