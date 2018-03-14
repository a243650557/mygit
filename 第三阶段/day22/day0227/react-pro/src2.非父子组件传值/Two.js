import React, {Component} from 'react'

import PubSub from 'pubsub-js'

export default class Two extends Component{

    constructor(){
        super();
        this.state = {
            data: ''
        }
    }

    render(){
        return (
            <div>
                <h1>Two组件</h1>
                <p>接收到的值为：{this.state.data}</p>
            </div>
        );
    }

    componentWillMount(){
        // 监听事件
        // 参数1：事件名字
        // 参数2：监听到事件时的回调
        this.token = PubSub.subscribe(
            'pass-data',
            (event, param)=>{
                console.log('监听到了');
                this.setState({data: param});
            }
        )
    }

    componentWillUnmount(){
        // 移除监听
        this.token();
    }

}