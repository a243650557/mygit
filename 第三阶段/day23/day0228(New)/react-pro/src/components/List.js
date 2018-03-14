import React, {Component} from 'react'

import center from '../notificationCenter'

export default class List extends Component{

    constructor(){
        super();
        this.state = {
            data: [],
            modifyIndex: -1
        }
    }

    render(){
        return (
            <ul className="list">
                {
                    this.state.data.map((item, index)=>{
                        return (
                            <li key={index}>
                                <h3>{item.name}</h3>
                                <p>{item.sign}</p>
                                <p>
                                    <button onClick={this.deleteItemByIndex.bind(this, index)}>删除</button>
                                    <button onClick={this.showItemByIndex.bind(this, index)}>查看</button>
                                    <button onClick={this.modifyItemByIndex.bind(this, index)}>修改</button>
                                </p>
                            </li>
                        )
                    })
                }
            </ul>
        );
    }

    componentDidMount(){
        center.$on('add-data', (param)=>{
            this.state.data.push(param);
            this.setState({data: this.state.data});
        })

        //监听修改
        center.$on('modify-data', (param)=>{
            //执行修改
            let {modifyIndex} = this.state;
            this.state.data[modifyIndex] = param;
            this.setState({data: this.state.data});
            // 重置修改
            this.setState({modifyIndex: -1});
        })
    }

    deleteItemByIndex(index){
        //删除
        this.state.data.splice(index, 1);
        this.setState({data: this.state.data});
    }

    showItemByIndex(index){
        //查看
        //取出查看的数据
        let info = this.state.data[index];
        //执行查看
        this.props.handleShow(info);
    }

    modifyItemByIndex(index){
        //修改'
        let info = this.state.data[index];
        this.props.handleModify(info);

        this.setState({modifyIndex: index});
    }

}