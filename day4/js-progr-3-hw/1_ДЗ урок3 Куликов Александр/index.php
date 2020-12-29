<!DOCTYPE html>
<html lang="ru">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>1</title>
        <link href="css/styles.css" rel="stylesheet">
		<style>
		.download {
		width:10px;
		height: 10px;
		border-radius:50%;
		display:none;

		}
		.download .elem {
			width:5px;
			height: 5px;
			float: left;
		}
		.download .elem:nth-child(1) {
			border-top-left-radius: 50%;
		}
		.download .elem:nth-child(2) {
			border-top-right-radius: 50%;
		}
		.download .elem:nth-child(3) {
			border-bottom-left-radius: 50%;
		}
		.download .elem:nth-child(4) {
			border-bottom-right-radius: 50%;
		}
		.clearfix {
			content: "";
			display: block;
			clear: both;
		}
		

	</style>
		
		

    </head>
    <body>
        <form class="app">
            Имя<br>
            <input type="text" name="name">
            <span class="error" data-error="name"></span>
            <br>
            Телефон<br>
            <input type="text" name="phone">
            <span class="error" data-error="phone"></span>
            <br>
            Почта<br>
            <input type="text" name="email">
            <span class="error" data-error="email"></span>
            <br>
            <input type="button" value="Отправить" class="send">
        </form>
		 
        <div class="result"></div>
		<div class="download clearfix">
        	<div class="elem" data-color="red"></div>
        	<div class="elem" data-color="green"></div>
        	<div class="elem" data-color="blue"></div>
        	<div class="elem" data-color="yellow"></div>

        </div>
		
        <script src="js/jquery-3.2.0.min.js"></script>
        <script src="js/scripts.js"></script>
        <script>
		
		
		</script>
		
		
    </body>
</html>

 