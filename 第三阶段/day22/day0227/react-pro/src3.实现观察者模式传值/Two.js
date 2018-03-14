import React, {Component} from 'react'

import center from './notificationCenter'

export default class Two extends Component{

    constructor(){
        super();
        this.state = {
            data: ''
        }

        this.onPassData1 = this.onPassData1.bind(this);
        this.onPassData2 = this.onPassData2.bind(this);
    }

    render(){
        return (
            <div>
                <h1>Two组件</h1>
                <p>接收到的值为：{this.state.data}</p>
            </div>
        );
    }

    onPassData1(param){
        console.log('监听到了1');
        this.setState({data: param});
    }

    onPassData2(param){
        console.log('监听到了2');
        this.setState({data: param});
    }

    componentWillMount(){
        
        // 监听事件
        center.$on('pass-data', this.onPassData1);

        center.$on('pass-data', this.onPassData2);
    }

    componentWillUnmount(){
        //移除监听
        // center.$off('pass-data');
        center.$off('pass-data', this.onPassData1);
        center.$off('pass-data', this.onPassData2);
    }

}