<?php
	
	
	$name = trim($_POST['name']);
	$score = trim($_POST['scores']);
	
	sleep(2);
	    
    if($name == ''){
		$name = 'Anonymous';
	}
    
     
	file_put_contents('apps.txt', "$name $score\n", FILE_APPEND);
	
	$file = file_get_contents('apps.txt');
  //  print_r($_POST);
    echo json_encode($file);
