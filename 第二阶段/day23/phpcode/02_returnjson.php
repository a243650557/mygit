<?php
//后台文件设置支持跨域（PHP）
header('Access-Control-Allow-Origin:*');

//返回json文件中的内容
echo file_get_contents("json/person.json");















