


//我的飞机
var myPlane = {
	
	//属性
	ele: null,
	fireInterval: 300, //发射子弹的间隔
	
	//方法
	//init
	init: function(){
		this.ele = document.createElement("div");
		gameEngine.ele.appendChild(this.ele);
		this.ele.className = "myplane";
		this.ele.style.left = (gameEngine.ele.offsetWidth-myPlane.ele.offsetWidth)/2 + "px";
		this.ele.style.top = gameEngine.ele.offsetHeight-myPlane.ele.offsetHeight + "px";
		return this;
	},
	
	//开火， 发射子弹
	fire: function(){
		setInterval(function(){
			
			//创建子弹对象并发射
			var bullet = new Bullet();
			bullet.init().move();
			
		}, this.fireInterval);
	},
	
	//拖拽移动
	move: function(){
		
		myPlane.ele.onmousedown = function(e){
			e = e || event;
			var disx = e.offsetX;
			var disy = e.offsetY;
			
			document.onmousemove = function(e){
				e = e || event;
				var x =  e.pageX - disx - gameEngine.ele.offsetLeft;
				if (x<=0) {
					x = 0;
				}
				else if (x>=gameEngine.ele.offsetWidth-myPlane.ele.offsetWidth) {
					x=gameEngine.ele.offsetWidth-myPlane.ele.offsetWidth;
				}
				myPlane.ele.style.left = x + "px";
				myPlane.ele.style.top = e.pageY - disy + "px";
			}
			document.onmouseup = function(){
				document.onmousemove = document.onmouseup = null;
			}
		}
	}
	
}





