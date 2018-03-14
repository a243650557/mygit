//路由配置

import Vue from 'vue'
import VueRouter from 'vue-router'

//引入页面组件
import Home from '../pages/Home.vue'
import Discover from '../pages/Discover.vue'
import Setting from '../pages/Setting.vue'
import Notfind from '../pages/Notfind.vue'

//引入子页面
import HomeDetail from '../pages/HomeDetail.vue'


//将路由跟vue相关联，在vue项目中才能使用路由
Vue.use(VueRouter);

//创建路由对象
const router = new VueRouter({
	//路由配置项
	//项目中的所有页面配置
	routes: [
		//一个对象就是一个路径的配置项
		{
			//地址栏中url地址的hash
			path: '/home',
			//当地址栏中的hash值跟path配置一致时，将组件替换到router-view组件的位置
			component: Home,
			children: [//子页面配置
				{//一个对象就是一个子页面配置项
//					path: 'detail',
					//配置路径传参
					path: 'detail/:id/:title',
					component: HomeDetail
				}
			]//,
			//配置别名
//			alias: '/'
		},
		{
			path: '/discover',
			component: Discover
		},
		{
			path: '/setting',
			component: Setting
		},
		//重定向
		{
			path: '/',
			redirect: '/home'
		},
		//匹配所有
		{
			path: '**',//匹配所有路径
			component: Notfind
		}
	]
});

//向外输出
export default router;
