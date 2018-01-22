const express = require('express');
const mongoose = require('mongoose');
const swig = require('swig');
const Cookies = require('cookies');

// 数据库表格 
// 买家    商家    商品     订单

//引入处理买家请求的模块
//页面
const buyerRouter = require('./routers/buyer/buyerRouter');
//ajax
const buyerApiRouter = require('./routers/buyer/buyerApiRouter');
// 引入处理卖家请求的模块
//页面
const sellerRouter = require('./routers/seller/sellerRouter');
//ajax
const sellerApiRouter = require('./routers/seller/sellerApiRouter');



const server = express();

// 配置模板引擎
server.engine('html', swig.renderFile);
server.set('views', './views');
server.set('view engine', 'html');
swig.setDefaults({cache: false});

// 配置静态资源
server.use('/st', express.static('./static'));


server.use((request, response, next)=>{
    //创建cookies对象，需要使用request, response对象进行创建
    // 处理request中传入的cookies
    //设置cookies值，是给response设置
    let cookies = new Cookies(request, response);

    request.handleCookies = cookies;//也可以放在response下，其他的页面就不需要requirecookie了

    //获得cookies值
    // var value = cookies.get('cookies的key值');
    // 设置cookies
    // cookies.set('key', 'value');
    // 清除
    // cookies.set('key'， null);

    next();
});
//将请求处理分发出去
server.use('/seller/api', sellerApiRouter);
server.use('/seller', sellerRouter);

server.use('/api', buyerApiRouter);
server.use('/', buyerRouter);



//连接数据库
new Promise((resolve, reject)=>{
    mongoose.connect('mongodb://localhost:27017', (error)=>{
        if(error){ 
            console.log('连接数据库失败');
            console.log(error);
        }else{
            console.log('连接数据库成功');
            resolve();
        }
    })
})
//启动服务器
.then(
    ()=>{
        server.listen('8080', 'localhost', (error)=>{
            if(error){
                console.log('服务器启动失败');
                console.log(error);
            }else{
                console.log('服务器启动成功');
                console.log('http://localhost:8080');
            }
        });
    }
)


