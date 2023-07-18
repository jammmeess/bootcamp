<html lang="en">

<head>
    @include('layouts/head')
    <title>Contact</title>
</head>

<body>
    @include('layouts/navbar')
    @include('layouts/errors')
    <p>We would like to hear from you!</p>
    <form action="/contact" method="POST">
        @csrf
        <label>Email: </label>
        <input type="email" name="email"></input><br>
        <label>Content: </label>
        <textarea name="text"></textarea><br>
        <input type="submit" class="btn btn-primary">
    </form>

</body>

</html>