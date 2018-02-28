<?php
header('Access-Control-Allow-Origin: *');

//先接收前端提交过来的参数
$regname = $_REQUEST["regname"];

if ($regname=="zhangsan" || $regname=="lisi") {
    $arr = array("status"=>0, "msg"=>"用户名已经被注册过了");
    echo  json_encode($arr);
}
else {
    $arr = array("status"=>1, "msg"=>"恭喜你， 可以注册！");
    echo  json_encode($arr);
}











