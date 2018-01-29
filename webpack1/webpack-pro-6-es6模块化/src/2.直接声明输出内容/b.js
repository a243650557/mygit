let name = '张三';
let name1 = '李四';
let func = function(){
		console.log('func执行：');
		console.log(name);
};

//向外输出的内容
export {
	name,
	name1,
	func
}
