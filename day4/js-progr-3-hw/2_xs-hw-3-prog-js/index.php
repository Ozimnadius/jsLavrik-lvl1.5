<!doctype html>
<html lang="ru">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>ajax json</title>
        <link rel="stylesheet" href="css/font-awesome.min.css">
        <link href="css/styles.css" rel="stylesheet">
    </head>
    <body>
        <form class="app">
            Имя<br>
            <input type="text" name="name" class="name">
            <span class="error"></span>
            <br>
            Телефон<br>
            <input type="text" name="phone" class="phone">
            <span class="error"></span>
            <br>
            Почта<br>
            <input type="text" name="email" class="email">
            <span class="error"></span>
            <br>
          
            <button class="send"  type="button">
                <span>Отправить</span>
                <i class="fa fa-2x fa-spinner fa-pulse" aria-hidden="true"></i>
            </button>
           
        </form>
        <div class="result"></div>
        <script src="js/jquery-3.2.0.min.js"></script>
        <script src="js/scripts.js"></script>
    </body>
</html>
