import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Son extends Component{

    render(){
        console.log('render');

        return (
            <div>
                <h1>子组件</h1>
                <p>接收到父组件的数据为：{this.props.data}</p>
                <p>{this.props.val1}</p>
            </div>
        );
    }

    // 生命周期函数
    // 创建
        constructor(){
            super();

            console.log('constructor');

            this.state = {
                title: '123'
            }
        }
        componentWillMount(){
            console.log('componentWillMount');

        }
        //render
        componentDidMount(){
            console.log('componentDidMount');

        }
    // 更新
    //props和state发生变化都会触发更新机制
        componentWillReceiveProps(newProps){
            //对外部属性发生的变化执行监听，自己实现
            console.log('componentWillReceiveProps');
            //props将要接收的新数据：console.log(newProps);
            //props原来的数据：console.log(this.props);
        }
        shouldComponentUpdate(newProps, newState){
            console.log('shouldComponentUpdate');
            /*
            props的新值：newProps
            props的旧值：this.props
            state的新值：newState
            state的旧值：this.state
            */
            console.log(this.props);
            console.log(this.state);
            return true;
        }
        componentWillUpdate(){
            console.log('componentWillUpdate');

        }
        // render()
        componentDidUpdate(){
            console.log('componentDidUpdate');

        }

}


// 属性校验
Son.propTypes = {
    //key为外部接收的需要校验的属性
    val1: PropTypes.array,
    val2: PropTypes.bool
}


