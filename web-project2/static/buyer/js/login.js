$('#confirm').on('click', function(){
    //获得输入框内容
    var name = $('input[name="name"]').val();
    var psd = $('input[name="psd"]').val();
    // 判断是否为空
    if(!name || !psd){
        console.log('输入不能为空');
        return;
    }

    // 发送登录请求
    $.ajax({
        url: '/api/login',
        method: 'POST',
        data: {
            username: name,
            password: psd
        },
        success: function(result){
            console.log('登录完成');
            console.log(result);
            if(result.status == 0){
                window.location.href = '/';
            }else{
                alert(result.msg);
            }
        }
    })
})