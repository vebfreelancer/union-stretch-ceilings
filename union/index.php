<?php

echo '<meta name="viewport" content="width=device-width"><link rel="stylesheet" href="css/reset.css" media="all"><link rel="stylesheet" href="fonts/fonts.css" media="all"><link rel="stylesheet" href="css/style.css" media="all">
	<style>
	body{padding:40px;font-size:18px;background:none;}
	p{margin:10px;padding:0;}
	p span{color: red; font-weight: bold;}
	a{text-decoration:none;}
	</style>';

$dir = './';
 
$f = scandir($dir);
$count = 1;
foreach ($f as $file){
    if(preg_match('/\.(html)/', $file)){
        echo '<p><span>' .$count. '.</span> <a href="'.$file.'">'.$file.'</a></p>';
		$count++;
    }	
}
?>