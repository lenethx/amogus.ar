<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .flex{
            display: flex;
            justify-content: space-around;
        }
        .box{
            height: 100px;
            width: 100px;
            background-color: red;
        }
        .box1{
            transform: translate(calc(calc(max(-14.888888549804689vw, -14.888888549804689vh ) / -1) - 15vw), calc(0vh / 4)) rotate(calc(-14.888888549804689deg * 2.5));
        }
    </style>
</head>
<body>
    <div class="flex">
        <div class="box box1"></div>
        <div class="box box2"></div>
        <div class="box box3"></div>
    </div>
</body>
</html>