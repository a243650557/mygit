
function getStyleAttr(obj,attr){
	
	
	if(getComputedStyle){
		return getComputedStyle(obj,null)[attr];
	}
	return obj.currentStyle[attr];
}


function move(obj,attr,itarget){
	
	clearInterval(obj.timer);
	
	obj.timer=setInterval(function(){
		
		
	var current;
	if(attr=="opacity"){
		 current=Math.round(getStyleAttr(obj,attr)*100);
	}
	else{
		 current=parseInt(getStyleAttr(obj,attr));
	}
	
	var speed=(itarget-current)/8;
	speed=speed>0? Math.ceil(speed):Math.floor(speed);
	
	
	if(current==itarget){
		clearInterval(obj.timer);
			return;
	}
	
	
	if(attr=="opacity"){
		
		obj.style[attr]=(current+speed)/100;
		obj.style.filter="alpha(opacity:"+(current+speed)+")";
		
	}
	else{
		obj.style[attr]=current+speed+"px";
	}
	},30)
}

///多属性调用！！！！
function animate(obj,json,fn){
	
	clearInterval(obj.timer);
	
	obj.timer=setInterval(function(){
		
		var bstop=true;
		
		for(var attr in json){
			
			var itarget=json[attr];
			
			var current;
			if(attr=="opacity"){
				
				current=Math.round(getStyleAttr(obj,attr)*100);
			}
			else{
				
				current=parseInt(getStyleAttr(obj,attr));
			}
			var speed=(itarget-current)/8;
			speed=speed>0? Math.ceil(speed):Math.floor(speed);
			
			
			if(itarget!=current){
				bstop=false;	
			}
			if(attr=="opacity"){
				obj.style[attr]=(current+speed)/100;
				obj.style.filter="alpha(opacity:"+(current+speed)+")";
			}
			else{
				obj.style[attr] = current + speed + "px";
			}
		}
		if(bstop){
			
			clearInterval(obj.timer);
			if(fn) fn();
		}
		
	},30)
		
	
}
