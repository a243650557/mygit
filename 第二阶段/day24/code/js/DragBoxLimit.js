



//DragBoxLimit
//->红色的div可以拖拽,但是不能超出左边界和上边界DragBoxLimit;

function DragBoxLimit(id){
	DragBox.call(this, id);
}
DragBoxLimit.prototype = new DragBox();

//重写moving方法
DragBoxLimit.prototype.moving = function(x, y){
	var that = this;
	document.onmousemove = function(e){
		e = e||event;
		console.log("===== DragBoxLimit.prototype.moving =====");

		var left = e.pageX - x;
		var top = e.pageY - y;
		if (left <= 0) left=0;
		if (top <= 0) top=0;
		
		that.ele.style.left = left + "px";
		that.ele.style.top = top + "px";
	}
}




