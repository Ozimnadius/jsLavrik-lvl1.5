<!doctype html>
<html lang="ru">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>1</title>
        <link rel="stylesheet" href="fonts/font-awesome/css/font-awesome.min.css">
        <link href="css/styles.css" rel="stylesheet">
    </head>
    <body>
        <form class="app">
            Имя<br>
            <input type="text" name="name">
            <span class="error error-name"></span>
            <br>
            Телефон<br>
            <input type="text" name="phone">
            <span class="error error-phone"></span>
            <br>
            Почта<br>
            <input type="text" name="email">
            <span class="error error-email"></span>
            <br>
            <input type="button" value="Отправить" class="send">
            <span class="loading">
                <i class="fa fa-circle-o-notch fa-spin fa-fw" aria-hidden="true"></i>
                <span>Loading...</span>
            </span>
        </form>
        <div class="result"></div>
        <script src="js/jquery-3.2.0.min.js"></script>
        <script src="js/scripts.js"></script>
    </body>
</html>
