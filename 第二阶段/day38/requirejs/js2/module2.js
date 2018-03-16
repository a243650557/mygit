


//AMD规范
//定义模块
//依赖了module1.js文件
define(["module11"], function(fn1){ 
	
	//使用module1.js中的sum函数
	console.log( fn1(3,4) ); //7
	
	//当前模块的功能
	function myReduce(a, b){
		return a-b;
	}
	return myReduce;
})


