$(function(){
    
    let $form = $('.app');
    let $res = $('.result');
    let $err = $('.error');
    
    $('.send').on('click', function(){
        $err.each(function() {
            $(this).html('');
        });
        let sendBtn = this;
        sendBtn.disabled = true;
        sendBtn.classList.add("load");
        $.post('app.php', $form.serialize(), function(data){
            if(data.res){
                $res.html('Заявка отправлена!');
                $form.slideUp(300);
            }
            else{
                sendBtn.disabled = false;
                sendBtn.classList.remove("load");
                for(let errorName in data.errors) {
                    $("form > input").each(function() {
                        if($(this).attr("name") == errorName) {
                            $(this).next().html(data.errors[errorName].toString());
                        }
                    });
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