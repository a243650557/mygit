<?php
	//解决中文乱码
	header("Content-Type:text/html; charset=utf8");

	//JS语法： 变量，数据类型，运算符， if，Switch， for循环，while，do-while, 函数， 数组， 字符串， 对象等。。。

	//PHP语法：  变量，数据类型，运算符， if，Switch， for循环，while，do-while, 函数， 数组， 字符串， 对象等。。

	//变量
	$a = 10;
	$b = 11;
	$c = $a + $b;
	echo $c;
	echo "<b>hello</b>";

	//数据类型
	//Boolean， Number， String， Array， Object, Null
	$a = true;
	var_dump($a); //打印变量的类型和值

	$b = 12;
	var_dump($b);

	$b = 1.2;
	var_dump($b);

	//String
    $str = "hello";
	var_dump($str);

	$str = '你好';
	var_dump($str);

	//字符串连接
	$str2 = $str . " 世界";
	var_dump($str2);

	$len = strlen($str2);
	echo $len;

	//数组
	$arr = array(10,20,30,true,"hello");
	var_dump($arr);
//	echo  $arr[0] . "<br />";
//	echo  $arr[1] . "<br />";
//	echo  $arr[2] . "<br />";
//	echo  $arr[3] . "<br />";
//	echo  $arr[4] . "<br />";

	//数组长度
	echo count($arr) . "<br />";

	//遍历数组
	for ($i=0; $i<count($arr); $i++){
		//echo  $arr[$i] . "<br />";
	}

	//关联数组
	$arr = array("a"=>10, "b"=>20, "c"=>"hello"); //{a:10, b:20, c:hello}
	echo  $arr["b"] . "<br />";

	//遍历关联数组
	foreach($arr as $key=>$value) {
		echo "Key=" . $key . ", Value=" . $value . "<br>";
	}


	//对象
	//类
	class Res {
		public $status;
		public $msg;
	}

	//实例化
	$res = new Res();
	$res->status = 1;
	$res->msg = "success";
	var_dump($res);
	echo $res->status . "," . $res->msg . "<br>";

	//Null
	$n = null;
	var_dump($n); // . "<br>";

	//if , switch
	//for ，while, do-while
	//function
	//运算符


	//类
	class Res2 {
		public $status; //公有, 可以在本类，子类和对象中使用
		protected $msg=2; //保护，可以在本类， 子类中使用
		private $msg2;  //私有， 只可以在本类中使用
		var $msg3;

		function getMsg(){
			return $this->msg;
		}
	}
	//实例化
	$res = new Res2();
	$res->status = 1;
	$res->msg3 = "success";

	//json编码（json序列化）
	$jsonStr = json_encode($res);
	var_dump($jsonStr);

	//关联数组
	$arr = array("name"=>"老王", "age"=>33); //{name:老王，age:33}
	$jsonStr = json_encode($arr);
	var_dump($jsonStr);

	//json解码（json解析）
	$obj = json_decode($jsonStr);
	var_dump($obj);
	var_dump($obj->name);
	var_dump($obj->age);
	
	var_dump(1);
?>








