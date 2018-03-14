/*
首页轮播接口
latitude: 纬度
longitude: 经度
templates: ['main_template', 'favourable_template', 'svip_template']
 */
const BANNER_URL = '/restapi/shopping/openapi/entries';

/*
 商家列表接口
参数：
latitude
longitude
offset
limit
keyword
extras
extra_filters
rank_id
terminal
brand_ids
restaurant_category_ids
 * */
const SELL_LIST_URL = '/restapi/shopping/v3/restaurants';


/*
 根据关键字查询地址
keyword=
offset=0
limit=20
latitude=
longitude=
 * */
const ADDRESS_LIST_URL = '/restapi/bgs/poi/search_poi_nearby';



export default {
	BANNER_URL,
	SELL_LIST_URL,
	ADDRESS_LIST_URL
}



