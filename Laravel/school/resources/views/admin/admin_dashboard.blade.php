<html lang="en">

<head>
    @include("layouts/head")
    <title>Admin Dashboard</title>
</head>

<body>
    @include("layouts/navbar-admin")
    @include("layouts/errors")
    <h1>Admin Dashboard</h1>
    <a href="/logout">Logout</a>
    <div class="container">
        <div class="row">
            <div class="col-lg-5">
                {!! $chart->renderHTML() !!}
            </div>
        </div>
    </div>
</body>
@yield('javascript')
{!! $chart->renderChartJsLibrary() !!}
{!! $chart->renderJs() !!}

</html>