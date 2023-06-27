<html lang="en">

<head>
@include("layouts/head")
    <title>Subjects</title>
</head>
<body>
    <h1>Subjects</h1>
    <table class="table">
        <tr>
            <th>Subject Id</th>
            <th>Name</th>
            <th>Department</th>
        </tr>
   
    @foreach ($subjects as $s)
    <tr>
        <td>{{$s -> subject_id}}</td>
        <td>{{$s -> name}}</td>
        <td>{{$s -> department}}</td>
    </tr>
    @endforeach
    </table>
</body>

</html>