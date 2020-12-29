<!doctype html>
<html lang="ru">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>json</title>
        <link href="css/styles.css" rel="stylesheet">
    </head>
    <body>
        <form class="app">
            Имя<br>
            <input type="text" name="name">
            <span class="error-name"></span>
            <br>
            Телефон<br>
            <input type="text" name="phone">
            <span class="error-phone"></span>
            <br>
            Почта<br>
            <input type="text" name="email">
            <span class="error-email"></span>
            <br>
            <input type="button" value="Отправить" class="send">

            <span class="loading hide"><img src="img/smile.png"></span>
        </form>
        <div class="result"></div>
        <script src="js/jquery-3.2.0.min.js"></script>
        <script src="js/scripts.js"></script>
    </body>
</html>
