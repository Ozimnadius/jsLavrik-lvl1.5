$(function(){
    
    let $form = $('.app');
    let $res = $('.result');
    let $errors = $('.error');
    let $loading = $('.loading');
    let isRun = false;
    
    $('.send').on('click', function(){
        if(isRun){
            return;
        }
        
        isRun = true;
        $loading.fadeIn(100);
        $res.empty();
    
        $.ajax({
            url: 'app.php',
            method: 'POST',
            data: $form.serialize(),
            dataType: 'json',
            timeout: 10000,
            success: onSuccess,
            error: function(){
                $res.html('Сервер лёг!');
            },
            complete: function(){
                $loading.hide();
                isRun = false;
            }
        });
        
        function onSuccess(data){
            if(data.res){
                $res.html('Заявка отправлена!');
                $form.slideUp(300);
            }
            else{
                $errors.empty();
                
                for(let name in data.errors){
                    let target = $('[name=' + name + ']');
                    
                    if(target.length > 0){
                        target.next().html(data.errors[name]);
                    }
                }
            }
        }
    });
    
});