



//DragBoxLimitText
//->黄色的div在红色div基础上可以显示当前坐标位置DragBoxLimitText;

function DragBoxLimitText(id){
	DragBoxLimit.call(this, id);
}
DragBoxLimitText.prototype = new DragBoxLimit();


//重写moving
DragBoxLimitText.prototype.moving = function(x, y){
	var that = this;
	document.onmousemove = function(e){
		e = e||event;
		console.log("===== DragBoxLimitText.prototype.moving =====");

		var left = e.pageX - x;
		var top = e.pageY - y;
		if (left <= 0) left=0;
		if (top <= 0) top=0;
		
		that.ele.style.left = left + "px";
		that.ele.style.top = top + "px";
		
		that.ele.innerHTML = "left:"+left + ",top:" + top;
	}
}





