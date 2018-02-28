

function parabola(obj,itarget){
	//开始位置：
	var start={
		left:obj.offsetLeft,
		top:obj.offsetTop,
	}
	//结束位置：
	var end={
		x:itarget.left-obj.offsetLeft,
		y:itarget.top-obj.offsetTop,
	}
	
	//y=a*x*x+b*x+c;
	var a=0.01;
	var b=(end.y-a*end.x*end.x)/end.x;
	
	//抛物线:
	var offsetX=0;
	var timer = setInterval(function(){
		offsetX+=6;
		var x=offsetX;
		var y=a*x*x+b*x;
		
		obj.style.left=start.left+offsetX+"px";
		obj.style.top=start.top+y+"px";
		
		if(obj.offsetLeft>itarget.left){
			obj.style.left=itarget.left+"px";
			obj.style.top=itarget.top+"px";
			clearInterval(timer);
		}
		
	},100)
	
	
	
}
