import React, {Component} from 'react'

import Son from './Son'

export default class Father extends Component{

    constructor(){
        super();
        this.state = {
            val: ""
        }
    }

    render(){
        return (
            <div>
                <h1>父组件</h1>

                <input type="text" ref="in"/>
                <button onClick={this.sendAction.bind(this)}>发送</button>

                <hr/>

                <Son data={this.state.val} val1={'123'} val2={123}/>

            </div>
        )
    }

    sendAction(){
        console.log('发送按钮点击了');
        //给属性赋值，并且该属性已经绑定给了子组件
        this.setState({val: this.refs.in.value});
    }

}