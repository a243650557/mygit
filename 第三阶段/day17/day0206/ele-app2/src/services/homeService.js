import axios from 'axios'
import {handleAppImg} from '../utils/format.js'
import API from '../api'

export function getBannerData(){
return new Promise((resolve, reject)=>{
	//请求首页轮播数据
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
		console.log('newData');
		console.log(newData);
		resolve(newData);
	})
	.catch(error=>{
		console.log(error);
	})
})
}


