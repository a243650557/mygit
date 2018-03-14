import React, {Component} from 'react'

import center from './notificationCenter'

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
        //触发事件
        center.$emit('pass-data', this.refs.in.value);
    }

}