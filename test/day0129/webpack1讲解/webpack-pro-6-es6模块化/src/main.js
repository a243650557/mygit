//es6引入模块

/*
//引入默认输出的内容
import dModule from './d.js'
import test from './d.js'


console.log(dModule)
console.log(test)

//引入的是直接输出的内容
import {age, name, func, age1, name1} from './d.js'

console.log(age, name);
*/

/*
//既引入默认输出的内容,又引入的是直接输出的内容
import dModule, {age, name, func, age1, name1} from './d.js'

console.log(dModule);
console.log(age);
console.log(name);
console.log(func);
*/


//重命名
import dModule, {age, name as name2} from './d.js'

console.log(dModule);
console.log(age);
console.log(name);
console.log(name2);