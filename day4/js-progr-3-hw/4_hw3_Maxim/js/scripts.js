$(function(){
    
    let $form = $('.app');
    let $res = $('.result');
    let $spinner = $('.loading');
    
    $('.send').on('click', function(){
        $this = $(this);
        $('.error').empty();
        $spinner.addClass('is-visible');
        $this.attr('disabled', 'disabled');
        $.post('app.php', $form.serialize(), function(data){
            $spinner.removeClass('is-visible');
            if(data.res) {
                $res.html('Заявка отправлена!');
                $form.slideUp(300);
            }
            else {
                $this.removeAttr('disabled');
                for(let e in data.errors) {
                    if(e === 'name') {
                        $('.error-name').html(data.errors[e]);
                    } else if(e === 'phone') {
                        $('.error-phone').html(data.errors[e]);
                    } else if(e === 'email') {
                        $('.error-email').html(data.errors[e]);
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