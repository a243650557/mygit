export function handleAppImg(path, size){
	if(path){
		let hz = path.endsWith('png')?'.png':'.jpeg';
		return (
			'http://fuss10.elemecdn.com/' +
			path + hz +
			`?imageMogr/format/webp/thumbnail/!${size}x${size}r/gravity/Center/crop/${size}x${size}/`
		)
		
	}else{
		return '';
	}
}
