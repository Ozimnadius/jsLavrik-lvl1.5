$(function(){
    
    let $form = $('.app');
    let $res = $('.result');
    let $loader = $('.fa-spinner');
    let $butText = $('.send span');

    $loader.addClass('hide');
    
    
    $('.send').on('click', function(){
        let $but = $(this);

        $but.prop( "disabled", true );
        $butText.addClass('hide');
        $loader.removeClass('hide');

        $('input').removeClass('err');
        $('.error').html('');
        $('.result').html('');

        $.post('app.php', $form.serialize(), function(data){
            //console.log(1);
            $but.prop( "disabled", false );
            $loader.addClass('hide');
            $butText.removeClass('hide');

            if(data.res){
                $res.html('Заявка отправлена!');
                $form.slideUp(300);
            }
            else{
                $res.html('ERRORS!!!');
                for (let err in data.errors) {
                    //console.log('DATA.'+ err + '=' +data.errors[err]);
                    if (data.errors[err].length > 0) {
                        $('input.'+ err).addClass('err');
                        $('input.'+ err+'+ .error').html(data.errors[err]);
                    }
                }
            }
        }, 'json');
        
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