			function move(obj, attr, itarget,fn){
					
					//先清除原来的定时器
					clearInterval(obj.timer);
					
					//再开启新定时器
					obj.timer = setInterval(function(){
						
						//1，获取当前值
						var current = parseInt(getStyleAttr(obj, attr));
						
						//2, 速度 v=s/t (单位时间的距离)
						var speed = itarget>current ? 5 : -5;
						
						//3，判断临界值
						if ( Math.abs(itarget-current) <= Math.abs(speed)){
							//clearInterval(obj.timer); //停止运动
							obj.style[attr] = 0 + "px";
							console.log(current + speed);
							return;
						}
						
						//4， 运动
						obj.style[attr] = current + speed + "px";
						
						
						
						
					
					}, 30);
				}
				
				
				//获取某节点的css属性值
				function getStyleAttr(obj, attr){
					if (window.getComputedStyle) {
						return getComputedStyle(obj, null)[attr];
					}
					return obj.currentStyle[attr];
				}