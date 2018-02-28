

			function move(obj,attr,itarget){
									
					clearInterval(obj.timer);					
					
					obj.timer=setInterval(function(){
						
						var current=parseInt(getStyleAttr(obj,attr));
						
						var speed=itarget>current? 5:-5;
						
						if(Math.abs(itarget-current)<Math.abs(speed)){
							clearInterval(timer);
							obj.style[attr]=itarget+"px";
							return;
						}
						//运动
						obj.style[attr]=current+speed+"px";
					},30)
								
			}
					
				
//				获取某节点的属性值：
				function getStyleAttr(obj,attr){
					
					if(window.getComputedStyle){
						return getComputedStyle(obj,null)[attr];
					}
					
					return obj.currentStyle[attr];
				}