<html lang="en">

<head>
    @include("layouts/head")
    <title>Profile</title>
</head>
<body>
    @include('layouts/navbar')
    @include("layouts/errors")
    <h1>Profile</h1>
    <p>Welcome, {{$s -> first_name}} {{$s -> last_name}}</p>
    <a href="/logout">Logout</a>
    <h2>Basic Info</h2>
    <ul>
        <li>Birthdate: {{$s -> birthdate}}</li>
        <li>Gender: {{$s -> gender}}</li>
        <li>Province: {{$s -> province}}</li>
    </ul>
</body>
</html>