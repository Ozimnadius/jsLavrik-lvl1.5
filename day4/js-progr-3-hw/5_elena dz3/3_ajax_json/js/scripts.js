$(function(){
    
    let $form = $('.app');
    let $res = $('.result');
	let $process = $('.process');
    let formSend = true;
	
    $('.send').on('click', function(){
		$('input[name = "name"] + span').html(''); 
		$('input[name = "email"] + span').html('');
		$('input[name = "phone"] + span').html('');
		if (formSend) {
			$process.removeClass('hide').addClass('show');
			formSend = false;
			$.post('app.php', $form.serialize(), function(data){
				if(data.res){
					$res.html('Заявка отправлена!');
					$form.slideUp(300);
				}
				else{
				//	$res.html(data.errors.toString());
				//	console.log(data.errors); 
					
					$('input[name = "name"] + span').html(data.errors.name); 
					$('input[name = "email"] + span').html(data.errors.email);
					$('input[name = "phone"] + span').html(data.errors.phone);
				}
				formSend = true;
				$process.removeClass('show').addClass('hide');
			}, 'json');
        }
    });

    
    /*
        $(...).load - подгрузить в html-элемент данные с сервера
        $.get       - выполнить get-запрос на сервер
        $.post      - выполнить post-запрос на сервер
        $.ajax      - выполнить любой запрос на сервер с тонкой настройкой
    */
    
    /*
        $.post(урл, объект, коллбек на успех, тип данных для коллбека)
    
    */
    
});