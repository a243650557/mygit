


//封装的抛物线运动

//parabola(box, {left:box2.offsetLeft, top:box2.offsetTop})

function parabola(obj, itarget){
	
	// 抛物线运动： y = a*x*x + b*x + c;
	
	// 经过（0,0）点， 0 = a*0*0 + b*0 + c;  c=0
	//  y = a*x*x + b*x;
	
	// 经过终点位置
	
	//计算出终点位置在数学坐标系中的坐标位置
	var end = {
		x : itarget.left - obj.offsetLeft,
		y : itarget.top - obj.offsetTop
	}
	
	//直接给定a的值， 再求出b的值
	var a = 0.01;
	var b = (end.y - a*end.x*end.x) / end.x;
	
	// y = a*x*x + b*x;
	
	
	//起始位置（数学坐标系的原点位置在页面坐标系中的位置）
	var center = {
		left : box.offsetLeft,
		top : box.offsetTop
	}
	
	//抛物线
	var offsetX = 0;
	var timer = setInterval(function(){
		offsetX += 6;
		
		var x = offsetX;
		var y = a*x*x + b*x;
		
		//移动box
		box.style.left = center.left + x + "px";
		box.style.top = center.top + y + "px";
		
		//如果到达目标位置
		if (box.offsetLeft >= itarget.left){
			box.style.left = itarget.left + "px";
			box.style.top = itarget.top + "px";
			clearInterval(timer); //关闭定时器
		}
		
	}, 100);
	
	
	
}






