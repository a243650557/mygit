import React, {Component} from 'react'

import Com from './Com.js'

export default class App extends Component{
    constructor(){
        super();
        this.state = {
            inputVal: '123'
        }
    }

    render(){
        let {inputVal} = this.state;
        return (
            <div>
                <h1>app组件</h1>
                <input type="text" value={inputVal} ref="in" onChange={()=>{
                    //手动实现数据的双向绑定
                    console.log(this.state.inputVal)
                    console.log(this.refs.in.value)
                    this.setState({inputVal: this.refs.in.value});
                }}/>
                <hr/>
                {/* <Com/> */}
                <Com val={inputVal} handle={this.getValue.bind(this)}></Com>
            </div>
        )
    }

    getValue(...rest){
        console.log('父组件中的getValue方法触发了');
        console.log(rest);
        console.log(this);
    }
}