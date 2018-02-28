


//游戏引擎
var gameEngine = {
	
	//属性
	//游戏区域（背景图区域）
	ele: null, 
	bullets: [], //当前页面上显示的所有子弹
	enemys: [], //当前页面上显示的所有敌机
	
	//总分数
	totalScore: 0, 
	
	//方法
	//init
	init: function(){
		this.ele = document.getElementById("main");
		return this;
	},
	
	//开始游戏
	start: function(){
		console.log("开始游戏");
		
		//加载游戏
		this.loadding(function(){
			console.log("加载游戏结束！");
			
			//创建我的飞机
			myPlane.init().move(); //创建我的飞机，且让其可以拖拽
			myPlane.fire(); //让我的飞机发射子弹
			
			//创建敌机
			gameEngine.createEnemy();
			
			//碰撞检测
			gameEngine.crashListening();
		});
		
	},
	
	//加载游戏
	loadding: function(cb){
		
		//logo
		var logo = document.createElement("div");
		gameEngine.ele.appendChild(logo);
		logo.className = "logo";
		
		//load
		var load = document.createElement("div");
		gameEngine.ele.appendChild(load);
		load.className = "load";
		
		//动画
		var imgs = ["images2/loading1.png", "images2/loading2.png", "images2/loading3.png"];
		var i = 0;
		var timer = setInterval(function(){
			if (i >= 0){
				clearInterval(timer);
				gameEngine.ele.removeChild(logo);
				gameEngine.ele.removeChild(load);
				
				//回调
				//if(cb) cb();
				cb && cb();
			}
			else {
				load.style.background = "url("+ imgs[++i%3] +") no-repeat";
			}
		}, 500);
		
	},
	
	//创建敌机
	createEnemy: function(){
		
		//随机创建敌机
		//创建大型敌机
		setInterval(function(){
			var b = Math.random()>0.5 ? true : false;
			if (b){
				var enemy = new Enemy(Enemy.prototype.ENEMY_TYPE_LARGE); 
				enemy.init().move();
			}
		}, 6000);
		
		//创建中型敌机
		setInterval(function(){
			var b = Math.random()>0.4 ? true : false;
			if (b){
				var enemy = new Enemy(Enemy.prototype.ENEMY_TYPE_MIDDLE); 
				enemy.init().move();
			}
			
		}, 3000);
		
		//创建小型敌机
		setInterval(function(){
			var b = Math.random()>0.5 ? true : false;
			if (b){
				var enemy = new Enemy(Enemy.prototype.ENEMY_TYPE_SMALL); 
				enemy.init().move();
			}
			
		}, 2000);
	},

    //碰撞检测
    crash: function(){

        var timer = setInterval(function(){

            for (var i=0; i<gameEngine.allEnemys.length; i++) { //遍历所有敌机

                for (var j=0; j<gameEngine.allBullets.length; j++) { //遍历所有子弹

                    if ( isCrash(gameEngine.allEnemys[i].ele, gameEngine.allBullets[j].ele) ) {
                        //console.log("碰撞了");

                        //让子弹爆炸并消失
                        gameEngine.allBullets[j].boom();
                        gameEngine.allBullets.splice(j, 1);

                        //让敌机受到一点伤害
                        gameEngine.allEnemys[i].hurt();
                    }

                }

                //判断敌机和我的飞机是否发生碰撞
                if ( isCrash(gameEngine.allEnemys[i].ele, myPlane.ele) ){
                    //console.log("Game Over!");

                    clearInterval(timer);

                    //我的飞机发生爆炸
                    myPlane.boom(function(){


                        //
                        var myName = prompt("请留下您的大名， 您当前的分数是:"+gameEngine.totalScore, "");

                        ajax({
                            type: "post",
                            url: "http://60.205.181.47/myPHPCode4/uploadScore.php",
                            data: {name: myName, score: gameEngine.totalScore},

                            success: function(data){
                                console.log("提交成功: " + data);
                                //进入排行榜
                                location.href = "03_rand.html";
                            }
                        })



                    });

                    break;
                }

            }

        }, 30);

    }
}










