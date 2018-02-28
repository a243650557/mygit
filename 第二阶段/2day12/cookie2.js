function setCookie(name,value,expires){
	var str = encodeURIComponent(name) + "=" + encodeURIComponent(value);
	if(expires && expires instanceof Date ){
		str = str + ";expires =" + expires;
	}
	document.cookie = str;
}

function getCookie(name){
	var str = decodeURIComponent(document.cookie);
	var arr = str.split("; ");
	console.log(arr);
	for(i=0; i<arr.length; i++){
		var str1 = arr[i];
		var arr1 = str1.split("=");
		console.log(arr1);
		if(arr1[0] == name){
			return arr1[1];
		}
		
	}
}
