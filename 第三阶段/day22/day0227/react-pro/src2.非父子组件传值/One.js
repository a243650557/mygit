import React, {Component} from 'react'

import PubSub from 'pubsub-js'

export default class One extends Component{

    render(){
        return (
            <div>
                <h1>one组件</h1>
                <input type="text" ref="in"/>
                <button onClick={this.sendAction.bind(this)}>发送</button>
            </div>
        );
    }

    sendAction(){
        console.log('发送');
        console.log(this.refs.in.value);

        // 触发事件
        // 参数1：事件名字
        // 参数2：传递的值
        PubSub.publish(
            'pass-data',
            this.refs.in.value
        )
    }

}