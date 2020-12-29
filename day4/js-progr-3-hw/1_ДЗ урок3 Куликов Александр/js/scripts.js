$(function(){
    
    let $form = $('.app');
    let $res = $('.result');
	let $error = $(' .app .error');
	let $download = $('.download .elem');
	let $btn = $('.send');
	let id;
	let k = 0;
	let flag = true;
	
	
    
    $btn.on('click', function(){
		$(this).attr('disabled','disabled');
			
	
		if(flag) { 
		$download.css({
				display:'block'
			});  
			getDownload();
		}
        $.post('app.php', $form.serialize(), function(data){
				flag=false;
            if(data.res){
                $res.html('Заявка отправлена!');
                $form.slideUp(300);
            }
				
				
				
				
            else {
				$error.each(function(){
					$(this).html("");
					for(let key in data.errors) {
						if(key == $(this).attr('data-error')) { $(this).html(data.errors[key]);}
					}
				});
            }
			if(!flag) { 
			$download.css({
				display:'none'
			}); 
			
			  flag = true;
			  clearTimeout(id);
			}
			
			$btn.removeAttr('disabled');
        }, 'json');
					
    });
					 
	  function getDownload() {
    	$download.eq(k).css({
    		background: $download.eq(k).attr('data-color')
    	})
    	k++;
    	if(k>=$download.length) k=0;
    	$download.eq(k).css({
    		background: '#fff'
    	})
    	id = setTimeout(getDownload,300);
		
    	
    }
					
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
				
			
					
				
				
				
					
					
				
				
			
		
        

    