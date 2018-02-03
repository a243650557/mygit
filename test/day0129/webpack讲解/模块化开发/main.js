//common.js规范的模块化方式
//现代浏览器是不支持commonJS规范

var personInfo = require('./personInfo.js')

document.querySelector('#name').innerText = personInfo.name;
document.querySelector('#age').innerText = personInfo.age;

document.querySelector('.test').onclick = personInfo.say();



