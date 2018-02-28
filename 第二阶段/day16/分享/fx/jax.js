function ajax (url,fnSucc,fnFaild){
		//创建Ajax对象
		if (window.XMLHttpRequest){
		var oAjax = new XMLHttpRequest();
	
		}
		else {
		var oAjax = new ActiveXObject("Microsoft.XMLHTTP");
		
		}
		//alert(oAjax.readyState);   没有初始化  没调用open
		//连接服务器
		//open(方法，文件名，异步传输)
		oAjax.open('GET',URL,true);
		
		//发送请求
		oAjax.send();
		//alert(oAjax.readyState);  载入，已调用send
		//接收返回
		oAjax.onreadystatechange = function(){
			//oAjax.readyState  //浏览器和服务器进行到哪一步
			if (oAjax.readyState == 4){
				if (oAjax.status == 200){
					fnSucc(oAjax.responseText)
					alert("成功")
				}
				else{
					if(fnFaild){
						fnFaild(oAjax.status)
					}
				}
			}
		}
}
