
//添加事件
function addEvent(obj, type, fn, useCapture){
      if (obj.addEventListener) {  
	obj.addEventListener(type, fn, useCapture);
      }
      else {
	obj.attachEvent("on"+type, fn);
      }
}
//移除事件
function removeEvent(obj, type, fn, useCapture){
      if (obj.removeEventListener) {
	obj.removeEventListener(type, fn, useCapture);
      }
      else {
	obj.detachEvent("on"+type, fn);
      }
}
//调用addEvent(aBtn[0], "click", fn, false);
function fn(){
      alert("click 按钮1");
}
aBtn[1].onclick = function(){
      removeEvent(aBtn[0], "click", fn, false);}
