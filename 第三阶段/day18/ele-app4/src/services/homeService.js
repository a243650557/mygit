import axios from 'axios'
import {handleAppImg} from '../utils/format.js'
import API from '../api'

//请求首页轮播数据
export function getBannerData(){
return new Promise((resolve, reject)=>{
	axios.get(API.BANNER_URL, {
		params: {
			latitude: '22.54286',
			longitude: '114.059563',
			templates: ['main_template', 'favourable_template', 'svip_template']
		}
	})
	.then(response=>{
		let entries = response.data[0].entries.map(item=>{
			return {
				name: item.name,
				imgpath: handleAppImg(item.image_hash, 90)
			}
		})
		let newData = [];
		while(entries.length>0){
			let item = entries.splice(0, 10);
			newData.push(item);
		}
		resolve(newData);
	})
	.catch(error=>{
		console.log(error);
	})
})
}



//请求商家列表数据
export function getSellerListData(options){
	return new Promise((resolve, reject)=>{
		axios.get(API.SELL_LIST_URL, {
			//配置请求参数，发送请求
			params: options
		})
		.then(response=>{
			let newData = response.data.items.map(item=>{
				return {
					name: item.restaurant.name,
					logo: handleAppImg(item.restaurant.image_path, 130),
					activities: item.restaurant.activities.map(act=>{
						return {
							des: act.description,
							name: act.icon_name,
							color: act.icon_color
						}
					}),
					isShowAct: false
				}
			})
			resolve(newData);
		})
		.catch(error=>{
			console.log(error);
		})
	})
}


