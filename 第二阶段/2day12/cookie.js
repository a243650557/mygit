

function setCookie(name,value,expires){
	var str = encodeURIComponent(name) + "=" + encodeURIComponent(value);
	if(expires && expires instanceof Date){
		str = str + ";expires =" + expires;
		document.cookie = str;
	}
}


function getCookie(name){
	var str = document.cookie;
	console.log(str);
	var arr = str.split("; ");
	console.log(arr);
	for(i=0; i<arr.length; i++){
		
		if(arr[i].indexOf(name) != -1){
			
			return arr[i].substring([name.length+1]);
			
		}
	}
	return "";
}

function removeCookie(name){
	var d = new Date();
	d.setDate(d.getDate() - 1);
	document.cookie = name + "=" +"" +";expires:" +d;
}
