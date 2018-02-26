import React, {Component} from "react"

//组件的声明，在react中，组件没有局部组件和全局组件的概念
// 需要使用组件就引入这个类
// 引入类之后，首字符必须大写，使用的组件标签名字就是引入的变量
export default class App extends Component{

    // 组件dom结构由render方法提供
    // render方法的使用：
    // render(){
    //     return <h1>app</h1>
    // }

    // render(){
    //     let h = <h1>app</h1>;
    //     return h;
    // }

    // render(){
    //     let h = <div>
    //                 <h1>app</h1>
    //                 <p>my first react app</p>
    //             </div>;
    //     return h;
    // }

    // render(){
    //     return (
    //         <div>
    //             <h1>app</h1>
    //             <p>my first react app</p>
    //         </div>
    //     );
    // }

    // render(){
    //     let isShow = true;

    //     let box = isShow&&<div className="box"></div>;
    //     return (
    //         <div>
    //             <h1>app</h1>
    //             <p>my first react app</p>
    //             {box}
    //         </div>
    //     );
    // }

/********************************************************************************************/
    
    /*
    // data ====== react中state的使用：
    constructor(){
        super();

        // 设置内部属性的初始化
        this.state = {
            title: 'app组件',
            description1: 'app组件app组件app组件',
            description2: 'app组件app组件app组件',
            description3: 'app组件app组件app组件'
        }
        
    }

    render(){
        let {title, description1, description2, description3} = this.state;

        return (
            <div>
                <h1>{title}</h1>
                <h3>{description1}</h3>
                <h3>{description2}</h3>
                <h3>{description3}</h3>
                <button onClick={()=>{
                    console.log('按钮1点击了');
                    console.log(this);
                }}>
                    按钮1
                </button>
                <button onClick={this.btnAction.bind(this)}>按钮2</button>
            </div>
        )
    }


    btnAction(){
        console.log('按钮2点击了');
        console.log(this);
        // 在react中，数据是单向绑定的，state修改需要调用setState
        // this.state.title = 'test';
        //异步修改
        // 参数1：需要修改的state值
        // 参数2：修改完成的回调
        this.setState({title: 'test', description1: 'teststestest'}, ()=>{
            console.log('1'+this.state.title);//修改后的值，相当于vue中的$nextTick
        });

        console.log('2'+this.state.title);//修改前的值
    }
    */

/********************************************************************************************/
    //vue中的methods ===== react中的组件类的对象方法，this如果是事件调用没有指向
    
    //react中组件的生命周期方法

    // 创建Mounting
        //构造函数
        constructor(){
            super();
            console.log('constructor');
            this.state = {
                title: 'hello app'
            }
        }
        //组件将要渲染，将要读取虚拟dom结构
        //在这个函数中可以访问state了
        componentWillMount(){
            console.log('componentWillMount');
            console.log(this.state.title);
            console.log(document.querySelector('h1'));
        }
        render(){
            console.log('render');
            return (
                <div>
                    <h1 ref="h1">{this.state.title}</h1>
                    <h2 ref="h2">{this.state.title}</h2>
                    <h3>{this.state.title}</h3>
                    <h4>{this.state.title}</h4>

                    <button onClick={()=>{
                        this.setState({title: 'hello world'}, ()=>{
                            //数据和dom都修改完毕才执行 nextTick
                            console.log('修改完成的回调');
                        });
                    }}>按钮</button>
                </div>
            )
        }
        //渲染完成的方法
        // 可以操作dom了
        componentDidMount(){
            console.log('componentDidMount');

            console.log(this.refs.h1);

        }


    // 更新,数据先更新了导致dom结构更新，dom结构更新走更新的生命周期方法
        //外部属性更新的生命周期方法
        componentWillReceiveProps(){
            console.log('componentWillReceiveProps');
        }
        //组件是否应该更新dom结构
        shouldComponentUpdate(){
            console.log('shouldComponentUpdate');    
            return true;        
        }
        //组件将要更新
        componentWillUpdate(){
            console.log('componentWillUpdate');            
        }
        // render(){
        //     console.log('render');            
        // }
        //组件更新完毕
        componentDidUpdate(){
            console.log('componentDidUpdate');            
        }



    // 销毁
    componentWillUnmount(){

    }

}

