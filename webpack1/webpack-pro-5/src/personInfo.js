//let name = 'zhangsan'
//let age = 40
//
//module.exports = {
//	name,
//	age,
//	say: ()=>{
//		console.log('name:zhangsan, age: 40s');
//	}
//}

class Person{
	constructor(name, age){
		this.name = name;
		this.age = age;
	}
	say(){
		console.log(`name:${this.name}, age:${this.age}`);
	}
}

let zhangsan = new Person('张三', 40);

module.exports = zhangsan;

