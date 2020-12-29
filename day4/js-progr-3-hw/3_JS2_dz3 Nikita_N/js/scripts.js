$(function(){
    
    let $form = $('.app');
    let $res = $('.result');
    let $smile = $('.loading');
    let isRun = false;

    let $name=$('.error-name');
    let $phone=$('.error-phone');
    let $email=$('.error-email');

    $('.send').on('click', function(){

        if(isRun){
            return
        }

        isRun = true;

        $smile.removeClass('hide');

        $.post('app.php', $form.serialize(), function(data){

            console.log(data);

            if(data.res){
                $res.html('Заявка отправлена!');
                $form.slideUp(300);
            }
            else{
                /*$res.html(data.errors.toString());
                console.log(data.errors);*/
                if(data.errors.name){
                    $name.html(data.errors.name.toString());
                }

                else{
                    $name.html('');
                }

                if(data.errors.phone){
                    $phone.html(data.errors.phone.toString());
                }

                else{
                    $phone.html('');
                }

                if(data.errors.email){
                    $email.html(data.errors.email.toString());
                }

                else{
                    $email.html('');
                }


            }

            isRun = false;
            $smile.addClass('hide');
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