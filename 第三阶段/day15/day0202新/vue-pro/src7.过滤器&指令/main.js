import Vue from 'vue'

import App from './App.vue'

import Box from './Box.vue'

//全局组件
//Vue.component('box-com', Box);
Vue.component(Box.name, Box);

//过滤器
//将数据传入进入过滤器中，过滤器对数据进行处理，得到的结果返回出去
//参数1：过滤器名字
//参数2：过滤器函数
Vue.filter('currency', (val, ...rest)=>{
//	console.log('调用了currency过滤器');
//	console.log(rest);
	return '€'+val;
})


Vue.filter('arrFilter', (val, selector)=>{	
	if(val instanceof Array){
		//每一项值是数字，过滤器可以过滤出奇数和偶数
		return val.filter(item=>{
			if(selector == 'odd'){//得到奇数
				return item % 2 == 1;
			}else if(selector == 'even'){//得到偶数
				return item % 2 == 0;
			}
		})
		
	}else{
		return '';
	}
})



//指令
//v-if  v-show  v-model
//创建自定义指令
//参数1：指令名字
//参数2:指令的实现函数
//el: 指令所绑定的元素，可以用来直接操作 DOM 。
//binding: 一个对象，包含以下属性：
//name: 指令名，不包括 v- 前缀。
//value: 指令的绑定值， 例如： v-my-directive="1 + 1", value 的值是 2。
//oldValue: 指令绑定的前一个值，仅在 update 和 componentUpdated 钩子中可用。无论值是否改变都可用。
//expression: 绑定值的字符串形式。 例如 v-my-directive="1 + 1" ， expression 的值是 "1 + 1"。
//arg: 传给指令的参数。例如 v-my-directive:foo， arg 的值是 "foo"。
//modifiers: 一个包含修饰符的对象。 例如： v-my-directive.foo.bar, 修饰符对象 modifiers 的值是 { foo: true, bar: true }。
//vnode: Vue 编译生成的虚拟节点，查阅 VNode API 了解更多详情。
//oldVnode: 上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用。
Vue.directive('test', (el, info)=>{//v-text
	//info就是binding对象
	console.log('test指令调用了');
	console.log(el, info);
	console.log('test指令调用了');
	console.log(el,info);
	if(info.modifiers.left){
		el.innerText = info.value * 2;
	}else if(info.modifiers.right){
		el.innerText = info.value * 3;
	}else{
		el.innerText = info.value;
	}
});

Vue.directive('myShow', (el, info)=>{//v-show
	console.log('test指令调用了');
	console.log(el, info);
	el.style.display = info.value?'':'none';
});


Vue.directive('drag', (el, info)=>{
	el.style.position = 'absolute';
	el.style.top = '0';
	el.style.left = '0';
	
	var startX = 0;
	var startY = 0;
	
	el.onmousedown = function(ev){
		//记录起始位置
		var disX = ev.clientX - startX;
		var disY = ev.clientY - startY;
		var left;
		var top;
		document.onmousemove = function(ev){
			//计算移动的位置
			left = ev.clientX -disX;
			top = ev.clientY -disY;
			el.style.left = left+'px';
			el.style.top = top+'px';
		}
		document.onmouseup = function(){
			//记录结束的位置
			startX = left;
			startY = top;
			document.onmousemove = null;
			document.onmouseup = null;
		}
	}
})



