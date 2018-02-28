


//子弹
function Bullet(){
	
	//属性
	//ele
	this.ele = null;
	
	//方法
	//init
	this.init = function(){
		this.ele = document.createElement("div");
		gameEngine.ele.appendChild(this.ele);
		
		//将子弹节点添加到页面的同时，将子弹对象添加到数组bullets中保存
		gameEngine.bullets.push(this);
		//console.log(gameEngine.bullets);
		
		this.ele.className = "bullet";
		this.ele.style.left = myPlane.ele.offsetLeft + myPlane.ele.offsetWidth/2 - this.ele.offsetWidth/2 + "px";
		this.ele.style.top = myPlane.ele.offsetTop - this.ele.offsetHeight + "px";
		return this;
	}
	
	//移动
	this.move = function(){
		
		var that = this;
		this.timer = setInterval(function(){
			
			if (that.ele.offsetTop <= -18){
				clearInterval(that.timer); //停止运动
				gameEngine.ele.removeChild(that.ele); //移除子弹节点
				
				//当子弹节点从页面上移除的同时， 将当前的子弹对象从bullets中移除
				gameEngine.bullets.splice(gameEngine.bullets.indexOf(that), 1);
			}
			else {
				that.ele.style.top = that.ele.offsetTop - 10 + "px";
			}
		}, 30);
		
	}
	
	//爆炸
	this.boom = function(){
		//停止移动
		clearInterval(this.timer);
		
		this.ele.className = "bullet-die";
		
		//爆炸动画
		var that = this;
		var dieImgs = ["images2/die1.png", "images2/die2.png"];
		var i = 0;
		var dieTimer = setInterval(function(){
			if (i >= 1){
				clearInterval(dieTimer); 
				gameEngine.ele.removeChild(that.ele); //移除子弹节点
			}else {
				that.ele.style.background = "url(" + dieImgs[++i] + ") no-repeat"; 
			}
		}, 100);
		
	}
	
}










