//直接输出
export let name = '张三';
export let name1 = '李四';
export let func = function(){
		console.log('func执行：');
		console.log(name);
};


//打包输出
let age = 40;
let age1 = 50;
let func1 = function(){
	console.log(age,age1);
}

export {
	age,
	age1,
	func1
}

//默认输出
let height1 = 190;
export default {
	height: 180,
	height1,
	func3(){
		console.log(height1);
	}
}



//console.log('adsdfasdfas')
//console.log('adsdfasdfas')
//console.log('adsdfasdfas')
//console.log('adsdfasdfas')
//console.log('adsdfasdfas')

