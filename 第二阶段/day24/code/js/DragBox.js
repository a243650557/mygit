


//DragBox
//->粉色的div可以随意拖拽 DragBox;

//构造函数
function DragBox(id){
	if (id != undefined) {
		//属性
		this.ele = document.getElementById(id);	
	}
}

//原型
DragBox.prototype.startMove = function(){
	var that = this;
	this.ele.onmousedown = function(e){
		e = e||event;
		var disx = e.offsetX;
		var disy = e.offsetY;
		
		that.moving(disx, disy);
		that.stopMove();
	}
}

DragBox.prototype.moving = function(x, y){
	var that = this;
	document.onmousemove = function(e){
		e = e||event;
		console.log("===== DragBox.prototype.moving =====");

		that.ele.style.left = e.pageX - x + "px";
		that.ele.style.top = e.pageY - y + "px";
	}
}
DragBox.prototype.stopMove = function(){
	document.onmouseup = function(){
		document.onmousemove = null;
		document.onmouseup = null;
	}
}

