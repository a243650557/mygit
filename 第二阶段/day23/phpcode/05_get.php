<?php
header("Content-Type:text/html; charset=utf8");

//接收前端提交过来的参数
$username = $_GET["username"];
$pwd = $_GET["pwd"];
echo "用户名：" . $username . ", 密码：" . $pwd;













