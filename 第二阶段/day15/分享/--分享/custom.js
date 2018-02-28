/**
 * 说明：本文档最低兼容到IE8
 * 最后编辑日期：2017.12.5
 * 本文档分为三大块 --> 公用模块、PC端、移动端
 * 本文档使用者可视具体情况增删内容
 * 正则表达式
 */


/**
 * 公用模块
 */

//id便捷获取
var id = function (obj){
    return document.getElementById(obj)
}
//标签名便捷获取
var tagName = function (obj,obj2){
    return obj.getElementsByTagName(obj2)
}
//判断是PC端还是移动端
var isMobile = function(){
    if(navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)) return true;
    return false
}
//事件监听
var addEvent = function(obj, en, fn){
	if(obj.addEventListener) obj.addEventListener(en, fn, false);
	else obj.attachEvent('on'+en, fn)
}
var removeEvent = function(obj, en, fn){
	if(obj.addEventListener) obj.removeEventListener(en, fn, false);
	else obj.detachEvent('on'+en, fn)
}
//获取样式
var getStyle = function(obj, attr){
	if(window.getComputedStyle) return getComputedStyle(obj, null)[attr];
	else return obj.currentStyle[attr]
}
//阻止事件冒泡
var pcuBub = function(e){
	var e = e || window.event;
	if(e.stopPropagation) e.stopPropagation();
	else e.cancelBubble = true
}
//阻止默认行为
var pcuDef = function(e){
	var e = e || window.event; 
	if(e.preventDefault) e.preventDefault();
	else e.returnValue = false
}
//图片懒加载
//使用方法 --> 1、在需要使用懒加载的img上添加类名lazy && 把图片路径添加为lazy-src="" 2、在页面结构加载完成后调用lazy()
var lazy = function(){
    var aImg = document.querySelectorAll('.lazy');
    var aImgPos = [];

    for(var i=0;i<aImg.length;i++){
        var disTop =  aImg[i].offsetTop;
        var thisParent = aImg[i].offsetParent;
        while(thisParent){
            disTop+=thisParent.offsetTop;
            thisParent = thisParent.offsetParent
        }
        aImgPos.push(disTop)
    }

    addEvent(window, 'scroll', loads);
    loads();
    function loads(){
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        var stop = true;
        for(var i=0;i<aImgPos.length;i++){
            if(aImgPos[i] < scrollTop + document.documentElement.clientHeight+30){
                aImg[i].src = aImg[i].getAttribute('lazy-src');
                aImgPos[i] = 0
            }
            if(aImgPos[i] != 0) stop = false
        }
        if(stop) removeEvent(window, 'scroll', loads) 
    }
}


/**
 * PC模块
 */

//IE版本的判断
var isIE7 = function(){
    if(/msie [6|7]/i.test(navigator.userAgent))return true;
    return false
}
var isIE8 = function(){
    if(/msie [6|7|8]/i.test(navigator.userAgent))return true;
    return false
}
var isIE9 = function(){
    if(/msie [6|7|8|9]/i.test(navigator.userAgent))return true;
    return false
}
var isIE10 = function(){
    if(/msie [6|7|8|9|10]/i.test(navigator.userAgent))return true;
    return false
}
//IE89没有placeholder的问题
var placeHolder = function(color){
    if(!isIE9())return false;
    var iptDefCol="#666";               //placeholder默认颜色    
    var ipt = tagName(document, 'input');
    var iptArr = [];                    //存放获取到有placeholder的input标签
    var plArr = [];                     //存放获取到placeholder的值
    
    for(var i=0;i<ipt.length;i++){
        var pl = ipt[i].getAttribute('placeholder');
        if(pl){
            iptArr.push(ipt[i]);
            plArr.push(pl);
            ipt[i].value = pl;
            ipt[i].style.color = iptDefCol
        }       
    }
    for(var i=0;i<iptArr.length;i++){
        iptArr[i].tags = i;
        iptArr[i].onfocus = function(){
            if(this.value == plArr[this.tags]){
                this.value = '';
                this.style.color = color
            }            
        }
        iptArr[i].onblur = function(){
            if(this.value=='' || this.value==plArr[this.tags]){
                this.value = plArr[this.tags];
                this.style.color = iptDefCol
            }                
        }            
    }
}
//获取keyCode
var keyValue = function(e){
    var e = window.event || e;
	return ev.keyCode
}
//判断鼠标按下的键 返回0--左键 1--中键 2--右键
var mouseKey = function(e){
    var e = window.event || e;
    var down=e.button;
    if(isIE10()){
        if(down==1)	return 0;
        else if(down==4) return 1;
    }
    if(down==2) return 2;
    else if(down==1) return 1;
    else if(down==0) return 0
}
//判断鼠标滚动方向	返回 1 向上 -1 向下
var isUp = {
	v: null,
	scroll: function(e){
		var e = e || window.event;  
		var _this = this;
		if(e.wheelDelta){   
			_this.v = e.wheelDelta>0?'1':'-1'
		}else if(e.detail){ 
			_this.v = e.detail>0?'-1':'1'
		}                         
	}            
}
// 调用方法
// if (document.addEventListener) {    //兼容火狐
// 	document.addEventListener('DOMMouseScroll', now, false);  
// }  
// document.onmousewheel = now;  	//非火狐 

// function now(e){
// 	isUp.scroll(e)
	
// 	if(isUp.v == 1){
// 		console.log('向上')
// 	}
// 	else if(isUp.v == -1){
// 		console.log('向下')
// 	}
// }


/**
 * 移动端模块
 */

//rem的计算
//使用方法 --> 只需要将 设计图的真实像素/(真实像素*0.1) 即为rem值，例如：320/32，640/64，750/75
var loadRem = function(){
    var d=function(){document.documentElement.style.fontSize=document.documentElement.clientWidth/320*32+"px"};
    window.addEventListener("resize",d,!1);
    d()
};


/**
 * 正则表达式
 */

//邮政编码(共6位数字, 第一位不能为0)
var isPostal = /^[1-9]\d{5}$/;

//电子邮件(xxxx@xxx(.xxx)+)
var isEmail = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;

//手机号(13或14或15或18开头的11位数字)   19988886666
var isPhoto = /^((13[0-9])|(14(5|7))|(15([0-3]|[5-9]))|(17[0-9])|(18[0-9])|199)\d{8}$/;
		
//用户名(只能使用数字字母下划线, 且数字不能开头, 长度在6-15位)
var isUsername = /^[a-zA-Z_]\w{7,}$/;
 
//身份证
var isIdCard = /^\d{17}(\d|X)$/;

//中文
var isChinese = /[\u4e00-\u9fa5]+/;












