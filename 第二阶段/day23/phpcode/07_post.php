<?php
header("Content-Type:text/html; charset=utf8");

//接收前端提交过来的参数
//POST提交
$username = $_POST["username"];
$pwd = $_POST["pwd"];
echo "POST: 用户名：" . $username . ", 密码：" . $pwd;
echo  "<br>";

//REQEUST: 既可以接收GET也可以接收POST提交的参数
$username = $_REQUEST["username"];
$pwd = $_REQUEST["pwd"];
echo "Request: 用户名：" . $username . ", 密码：" . $pwd;
echo  "<br>";

//判断前端是使用GET还是POST进行提交的
if ( $_SERVER["REQUEST_METHOD"] == "GET" ) {
    echo "GET提交";
}
else if ( $_SERVER["REQUEST_METHOD"] == "POST" ) {
    echo "POST提交";
}










