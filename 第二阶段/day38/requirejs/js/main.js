



//console.log("主模块");

//此时页面已经渲染完成
//console.log(document.body); //[object HTMLBodyElement],



//console.log($); //报错

//AMD规范 : Async Module Defined 异步模块定义， require.js遵守AMD规范
//CMD规范： Common Module Defined 公共模块定义，Sea.js遵守CMD规范

//AMD规范： 
//	定义模块： define()
//	使用数组来依赖其他模块

//让当前文件依赖jquery.js文件， 会先加载jquery.js文件
/*
require(["jquery"], function(f){
	console.log($); //可以使用jquery.js
	console.log(f); //jquery.js中define的返回值jQuery对象	
})

*/

require.config({
	
	//配置路径
	paths: {
		module11: "../js2/module1",
		module2: "../js2/module2",
		module3: "../js2/module3"
	}
})

//依赖 module1模块
require(["module11", "module2", "module3"], function(fn1, fn2){
	console.log("主模块");
	
	//console.log($);
	console.log( fn1(1,2) ); //使用module1.js中的sum函数
	console.log( fn2(4,2) ); //使用module2.js中的myReduce函数
	console.log( fn3(3,4) ); //使用module3.js中的fn3函数
});


//单独来管理js文件
// 让js之间形成依赖关系

















