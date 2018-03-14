import React, {Component} from 'react'

export default class Show extends Component{

    constructor(){
        super();
    }

    render(){
        return (
            <div className="show">
                <h1>查看</h1>
                <p>姓名：{this.props.name}</p>
                <p>性别：{this.props.sex}</p>
                <p>出生年份：{this.props.year}</p>
                <p>兴趣爱好：{this.props.like}</p>
                <p>个性签名：{this.props.sign}</p>
                <button onClick={this.finishAction.bind(this)}>查看完成</button>
            </div>
        );
    }

    finishAction(){
        this.props.handleFinish();
    }

}