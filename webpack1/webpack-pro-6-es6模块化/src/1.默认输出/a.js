let name = 'zhangsan';

function func2(){
	console.log(name);
}

//向外输出内容
//default  默认输出
export default {
	name,
	age:40,
	test: '12345',
	func1(){
		console.log(name);
	},
	func2
}
