//处理买家页面请求
// 使用express的路由功能处理请求
const express = require('express');
const Buyer = require('../../model/Buyer');

const router = express.Router();

router.get('/login', (request, response)=>{
    console.log('login');
    response.render('buyer/login');
})

router.get('/register', (request, response)=>{
    response.render('buyer/register');
})

router.get('/logout', (request, response)=>{
    //清除cookies
    request.handleCookies.set('BUYER_ID', null);
    // 刷新页面
    // 重定向
    response.redirect('/');
})

router.get('/', (request, response)=>{
    let buyerid = request.handleCookies.get('BUYER_ID');
    console.log(buyerid);
    Buyer.findById(buyerid) //不能写成（{buyerid}）
    .then(result=>{
        if(result){
            response.render('buyer/index', {
                isLogin: true,
                username: result.username
            });
        }else{
            response.render('buyer/index');
        }
    })
    
})

router.get('/goodslist', (request, response)=>{
    response.render('buyer/goods');
})

router.get('/shoplist', (request, response)=>{
    response.render('buyer/shopes');
})




module.exports = router;
