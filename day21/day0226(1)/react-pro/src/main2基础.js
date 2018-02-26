import React from 'react'
import ReactDOM from 'react-dom'

/*
vue中指令               在react中实现
v-html                  let html = <h1>test</h1>;

v-text                  let text = '<h1>test</h1>';

v-show                  {isShow?<div class="box"></div>:''}
                        {isShow&&<div class="box"></div>}

v-if
v-else-if
v-else
v-for
v-bind
v-on
v-once
v-model
*/ 


/*
//v-html
let html = <h1>test</h1>;
//v-text
let text = '<h1>test</h1>';
//v-if
let isShow = true;

let showBox1 = isShow?<div class="box"></div>:'';
let showBox2 = isShow&&<div class="box"></div>;

ReactDOM.render(
    <div>
        {isShow?<div class="box"></div>:''}
        {isShow&&<div class="box"></div>}

        {showBox1}
        {showBox2}
    </div>,
    document.querySelector('#app')
)
*/

/*
//v-show
let isShow = true;
let styleObj = {
    // display: isShow||'none'
    display: isShow?'':'none'
}
ReactDOM.render(
    <div>
        <div class="box" style={styleObj}></div>
        <div class="box" style={{display: isShow||'none'}}></div>
    </div>,
    document.querySelector('#app')
)
*/

/*
//v-if v-else-if v-else
let num = 1;
let dom;
if(num == 0){
    dom = <div class="box">box0</div>;
}
else if(num == 1){
    dom = <div class="box">box1</div>;
}
else{
    dom = <div class="box">box2</div>;
}
ReactDOM.render(
    <div>
        {dom}
    </div>,
    document.querySelector('#app')
)
*/



//v-for
// 方式1
// let arr = ['a', 'b', 'c', 'd'];
// let arrDom = arr.map((item, index)=>{
//     return <div class="box" key={index}>{item}</div>;
// })
// ReactDOM.render(
//     <div>
//         {arrDom}
//     </div>,
//     document.querySelector('#app')
// )

// let arr = ['a', 'b', 'c', 'd'];
// ReactDOM.render(
//     <div>
//         {
//             arr.map((item, index)=>{
//                 return <div class="box" key={index}>{item}</div>;
//             })
//         }
//     </div>,
//     document.querySelector('#app')
// )


//方式2
// let arr = ['a', 'b', 'c', 'd'];
// let arrDom = (function(arr){
//     let result = [];
//     for(let i = 0; i < arr.length; i++){
//         let itemDom = <div class="box" key={i}>{arr[i]}</div>;
//         result.push(itemDom);
//     }
//     return result;
// })(arr);

// ReactDOM.render(
//     <div>
//         {
//             arrDom
//         }
//     </div>,
//     document.querySelector('#app')
// )


//v-bind
// let path = 'http://www.baidu.com';
// ReactDOM.render(
//     <div>
//         <a href={path}>百度一下</a>
//     </div>,
//     document.querySelector('#app')
// )

// class  string
// style  object
// ReactDOM.render(
//     <div>
//         <div class={"box "+'red'}></div>

//         <div class="box" style={ {backgroundColor: 'yellow', border: '10px solid #ddd'} }></div>

//     </div>,
//     document.querySelector('#app')
// )


//v-on
// ReactDOM.render(
//     <div>
//         <div class="box" onClick={()=>{
//             console.log('点击了');
//         }}>hello world</div>
//     </div>,
//     document.querySelector('#app')
// )


//v-model
let val = 123;
ReactDOM.render(
    <div>
        <input type="text" value={val}/>
    </div>,
    document.querySelector('#app')
)






