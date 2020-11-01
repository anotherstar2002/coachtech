<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>COACHTECH</title>
  <style>
    p{
      font-size: 16px;
    }
  </style>
</head>
<body>

  <h1>タイトル</h1>
  <p>{{$content}}</p>
  <form action="/hello" method="post">
    @csrf
    <input type="text" name="content">
    <input type="submit">
  </form>
  
</body>
</html>