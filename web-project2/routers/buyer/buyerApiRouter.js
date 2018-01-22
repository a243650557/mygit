//处理买家ajax请求
const express = require('express');
const url = require('url');
const Buyer = require('../../model/Buyer');

const bodyParser = require('body-parser');

const router = express.Router();

//准备ajax请求响应客户端的json数据格式
const responseData = {
    status: 0,
    msg: 'ok',
    data: {}
}

//解析post请求中的参数
router.use(bodyParser.urlencoded());


//注册请求处理
router.post('/register', (request, response)=>{
    // 获得参数
    // let {username, password, repassword} = url.parse(request.url, true).query;
    let {username, password, repassword} = request.body;
    // 判断参数是否为空
    if(!username || !password || !repassword){
        responseData.status = 1;
        responseData.msg = '参数不能为空';
        // response.write(JSON.stringify(result));
        // response.end();
        response.json(responseData);
        return;
    }
    // 判断密码是否一致
    if(password != repassword){
        responseData.status = 2;
        responseData.msg = '密码不一致';
        response.json(responseData);
        return;
    }
    // 查询数据库是否该用户已存在
    Buyer.findOne({
        username
    }).then(result=>{
        if(result){//存在该用户
            responseData.status = 3;
            responseData.msg = '该用户已存在';
            response.json(responseData);

        }else{// 不存在，注册该用户
            let buyer = new Buyer({
                username,
                password
            });
            buyer.save()
            .then(newBuyer=>{
                if(newBuyer){
                    responseData.status = 0;
                    responseData.msg = '注册成功';
                    response.json(responseData);
                }else{
                    responseData.status = 4;
                    responseData.msg = '数据库操作失败，注册失败';
                    response.json(responseData);
                }
            })
            

        }
    })


    
})

//登录请求处理
router.post('/login', (request, response)=>{
    // 获得参数
    let {username, password } = request.body;
    // 判断是否为空
    if(!username || !password){
        responseData.status = 1;
        responseData.msg = '用户名或密码不能为空';
        response.json(responseData);
        return;
    }
    //查询数据库
    Buyer.findOne({
        username
    }).then(result=>{
        if(result){//该用户存在，判断密码是否正确
            if(result.password == password){
                //登录成功
                // 用户id
                request.handleCookies.set('BUYER_ID', result._id);
                responseData.status = 0;
                responseData.msg = '登录成功';
            }else{
                //登录失败
                responseData.status = 2;
                responseData.msg = '密码错误';
            }

        }else{//该用户不存在，请先注册
            responseData.status = 3;
            responseData.msg = '该用户不存在，请先注册';
        }
        response.json(responseData);
    })

    // 
})


module.exports = router;
