$('#confirm').on('click', function(){
    //获得输入框内容
    var name = $('input[name="name"]').val();
    var psd = $('input[name="psd"]').val();
    var repsd = $('input[name="repsd"]').val();

    // 判断 是否为空
    if(!name || !psd || !repsd){
        console.log('不能输入为空');
        return;
    }
    // 判断 密码是否一致
    if(psd != repsd){
        console.log('两次密码不一致，请重新输入');
        return;
    }

    // 发送请求给后台，进行注册
    $.ajax({
        url: '/api/register',
        method: 'POST',
        data: {
            username: name,
            password: psd,
            repassword: repsd
        },
        success: function(result){
            console.log('注册完成');
            if(result.status == 0){
                //注册成功,跳转到登陆
                window.location.href = '/login';
            }else{
                //注册失败
                alert(result.msg);
            }
        }
    })
})