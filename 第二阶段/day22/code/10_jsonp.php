<?php
	// $msg是一个变量（php变量前都会有一个$）
	//$msg = $_GET["msg"];  //获取前端通过get请求提交过来的msg参数的值 , "hello"
	$cb = $_GET["cb1"];  //获取前端通过get请求提交过来的cb参数的值, "fn"
	
	//关联数组
	$arr = array("ss"=>"hello2"); // {ss:hello}
	
	//. 是php中的字符串连接
	echo $cb . "(" . json_encode($arr) . ")"; //"fn({ss:hello})"
	
?>