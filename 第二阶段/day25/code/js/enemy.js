


//敌机
function Enemy(type){
	
	//属性
	//ele
	this.ele = null;
	this.hp = 1;
	this.speed = 5;
	this.dieImgs = [];
	
	this.score = 0; 
	
	//方法
	//init
	this.init = function(){
		this.ele = document.createElement("div");
		gameEngine.ele.appendChild(this.ele);
		
		//将敌机节点添加到页面上的同时， 将敌机对象添加到数组enemys中
		gameEngine.enemys.push(this);
		
		switch(type){
			//大型敌机
			case this.ENEMY_TYPE_LARGE: 
				this.ele.className = "enemy-large";
				this.hp = this.ENEMY_HP_LARGE;
				this.speed = this.ENEMY_SPEED_LARGE;
				this.dieImgs = ["images2/plane3_die1.png", "images2/plane3_die2.png", "images2/plane3_die3.png", "images2/plane3_die4.png", "images2/plane3_die5.png", "images2/plane3_die6.png"];
				this.score = 30;
				break;
				
			//中型敌机
			case this.ENEMY_TYPE_MIDDLE: 
				this.ele.className = "enemy-middle";
				this.hp = this.ENEMY_HP_MIDDLE;
				this.speed = this.ENEMY_SPEED_MIDDLE;
				this.dieImgs = ["images2/plane2_die1.png", "images2/plane2_die2.png", "images2/plane2_die3.png", "images2/plane2_die4.png"];
				this.score = 20;
				break;
			
			//小型敌机
			case this.ENEMY_TYPE_SMALL: 
				this.ele.className = "enemy-small";
				this.hp = this.ENEMY_HP_SMALL;
				this.speed = this.ENEMY_SPEED_SMALL;
				this.dieImgs = ["images2/plane1_die1.png", "images2/plane1_die2.png", "images2/plane1_die3.png"];
				this.score = 10;
				break;
			
			default :
				console.log("输入错误， 没有这种飞机");
		}
		
		//敌机位置
		this.ele.style.left = parseInt(Math.random()*(gameEngine.ele.offsetWidth-this.ele.offsetWidth)) + "px";
		this.ele.style.top = -this.ele.offsetHeight + "px";
		
		return this;
	}
	
	//移动
	this.move = function(){
		
		var that = this;
		this.timer = setInterval(function(){
			if (that.ele.offsetTop > gameEngine.ele.offsetHeight){
				clearInterval(that.timer); //停止移动
				gameEngine.ele.removeChild(that.ele); //移除节点
				
				//当敌机节点从页面上移除的同时， 将当前敌机对象从数组enemys中移除
				gameEngine.enemys.splice(gameEngine.enemys.indexOf(that), 1);
			}
			else {
				that.ele.style.top = that.ele.offsetTop + that.speed + "px"
			}
		}, 30);
		
	}
	
	//收到一点伤害
	this.hurt = function(){
		this.hp--;
		
		if (this.hp == 0) {
			gameEngine.totalScore += this.score; 
			console.log("当前分数： " + gameEngine.totalScore);
			
			this.boom();
		}
	}
	
	//爆炸
	this.boom = function(){
		
		//停止移动
		clearInterval(this.timer);
		
		//爆炸动画
		var that = this;
		var i = 0;
		var dieTimer = setInterval(function(){
			if (i >= that.dieImgs.length){
				clearInterval(dieTimer);  //关闭定时器
				gameEngine.ele.removeChild(that.ele);//移除节点
				
				//当敌机节点从页面上移除的同时， 将当前敌机对象从数组enemys中移除
				gameEngine.enemys.splice(gameEngine.enemys.indexOf(that), 1);
			}
			else {
				that.ele.style.background = "url("+ that.dieImgs[i++] + ") no-repeat";
			}
			
		}, 50);
		
	}
	
	
}

//原型
//敌机类型
Enemy.prototype.ENEMY_TYPE_LARGE = 1; //表示大型敌机
Enemy.prototype.ENEMY_TYPE_MIDDLE = 2; //表示中型敌机
Enemy.prototype.ENEMY_TYPE_SMALL = 3; //表示小型敌机

//敌机血量
Enemy.prototype.ENEMY_HP_LARGE = 8; //大型敌机的血量
Enemy.prototype.ENEMY_HP_MIDDLE = 3; //中型敌机的血量
Enemy.prototype.ENEMY_HP_SMALL = 1; //小型敌机的血量

//敌机速度
Enemy.prototype.ENEMY_SPEED_LARGE = 2; //大型敌机的速度
Enemy.prototype.ENEMY_SPEED_MIDDLE = 5; //中型敌机的速度
Enemy.prototype.ENEMY_SPEED_SMALL = 8; //小型敌机的速度








