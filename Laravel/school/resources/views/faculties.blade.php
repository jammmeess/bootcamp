<html lang="en">

<head>
    @include("layouts/head")
    <title>Faculty Members</title>
</head>
<body>
    <img src="https://external-preview.redd.it/p9_LBMMn22djOrg9XGS2wIcQh2zRyBELz6zhmSUZUSg.jpg?auto=webp&s=6ae3d505c2f1ff1b15122036003fee77b283615e" style="width: 200px" />
    <h1>Faculties List</h1>
    <table class="table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Department</th>
                <th>Faculty ID</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($faculties as $f)
            <tr>
                <td>{{$f -> last_name}}, {{$f -> first_name}}</td>
                <td>{{$f -> department}}</td>
                <td>{{$f -> faculty_id}}</td>
            </tr>
            @endforeach
        </tbody>
    </table>

    <h1>Faculty Data</h1>
    <h2>Departments</h2>
    <table class="table">
        <thead>
            <tr>
                <th>Departments</th>
                <th>Total Faculty</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($facultyData as $fd)
            <tr>
                <td>{{$fd -> department}}</td>
                <td>{{$fd -> total_faculty}}</td>
            </tr>
            @endforeach
        </tbody>
    </table>
    <h2>Promotions</h2>
    <table class="table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Academe Points</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($academe_points as $ap)
            <tr>
                <td>{{$ap -> last_name}}, {{$ap -> first_name}}</td>
                <td>{{$ap -> academe_points}}</td>
            </tr>
            @endforeach
        </tbody>
    </table>
</body>

</html>