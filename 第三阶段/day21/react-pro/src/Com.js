import React, {Component} from 'react'

export default class Com extends Component{
    constructor(){
        super();
    }

    render(){
        return (
             <div>
                <h1>com组件</h1>
                <p>接收到的外部属性为：</p>
                <p>{this.props.val}</p>

                <button onClick={()=>{
                    this.props.handle('a', 'b');
                }}>传值给父组件</button>
            </div>
        )
    }
}