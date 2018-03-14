import React from 'react'
import ReactDOM from 'react-dom'

/*
// 渲染页面
ReactDOM.render(
    // 需要渲染的dom结构
    // 在js中直接写标签，并不是js语法了
    // jsx语法
    <h1 title="千锋教育">hello world</h1>,//虚拟dom
    // 渲染在页面的什么位置
    document.querySelector('#app'),
    // 渲染完成的回调函数
    ()=>{
        console.log('渲染完成');
    }
)
*/

//jsx语法的使用
// let dom = <div>
//             <h1 title="千锋教育">hello world</h1>
//             <p>it培训</p>
//         </div>;
// ReactDOM.render(
//     dom,
//     document.querySelector('#app'),
//     ()=>{
//         console.log('渲染完成');
//     }
// )

let arr = ['a', 'b', 'c', 'd', 'e'];
let dom = (
        <ul>
            {
                arr.map((item, index)=>{
                    return <li key={index}>{item}</li>
                })
            }
        </ul>
    );
ReactDOM.render(
    dom,
    document.querySelector('#app'),
    ()=>{
        console.log('渲染完成');
    }
)