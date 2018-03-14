import React, {Component} from 'react'

import center from '../notificationCenter'

export default class Modify extends Component{

    constructor(){
        super();
        this.state = {
            name: '',
            sex: '',
            year: '',
            like: [],
            sign: '我的个性签名'
        }
    }

    componentWillMount(){
        console.log(this.props);
        this.state.name = this.props.name;
        this.state.sex = this.props.sex;
        this.state.year = this.props.year;
        this.state.like = this.props.like;
        this.state.sign = this.props.sign;
    }

    shouldComponentUpdate(newProps, newState){
        if(this.props == newProps){
            return true;
        }

        this.setState({
            name: this.props.name,
            sex: this.props.sex,
            year: this.props.year,
            like: this.props.like,
            sign: this.props.sign
        }, ()=>{
            // 强制执行render
            this.forceUpdate();
        });
        return true;
    }

    render(){
        let {name, sex, year, like, sign} = this.state;

        // 处理姓名
        let nameDom = (
            <p>
                <label>姓名：</label>
                <input type="text" value={name} onChange={this.handleChange.bind(this, 'name')}/>
            </p>
        );

        //处理性别
        let sexArr = ['男', '女'];
        let sexDom = (
            <p>
                <label>性别：</label>
                {
                    sexArr.map((sexItem, index)=>{
                        return (
                            <label key={index}><input type="radio" checked={sex==sexItem} value={sexItem} onChange={this.handleChange.bind(this, 'sex')}/>
                                {sexItem}
                            </label>
                        )
                    })
                }
            </p>
        );

        //处理出生年份
        let yearArr = [1990, 1991, 1992, 1993, 1994, 1995];
        let yearDom = (
            <p>
                <label>出生年份：</label>
                <select ref="yearIn" onChange={this.handleChange.bind(this, 'year')}>
                    {
                        yearArr.map((yearItem, index)=>{
                            return <option key={index} value={yearItem}>{yearItem}</option>
                        })
                    }
                </select>
            </p>
        );

        // 处理兴趣爱好
        let likeArr = ['吃', '喝', '玩', '乐'];
        let likeDom = (
            <p>
                <label>兴趣爱好：</label>
                {
                    likeArr.map((likeItem, index)=>{
                        return (
                            <label key={index}>
                                <input type="checkbox" value={likeItem} onChange={this.handleLike.bind(this)}
                                    checked={(()=>{
                                        let val = like.find(item=>{
                                            return item == likeItem
                                        })
                                        if(val){
                                            return true;
                                        }else{
                                            return false;
                                        }
                                    })()} />
                                {likeItem}
                            </label>
                        )
                    })
                }
            </p>
        );

        // 个性签名
        let signDom = (
            <p>
                <label>个性签名：</label>
                <textarea value={sign} onChange={this.handleChange.bind(this, 'sign')}></textarea>
            </p>
        );

        console.log('modify render');

        return (
            <div className="add">
                <h1>修改</h1>
                {nameDom}
                {sexDom}
                {yearDom}
                {likeDom}
                {signDom}
                <button onClick={this.modifyAction.bind(this)}>修改</button>
                <button>取消</button>
            </div>
        );
    }

    componentDidMount(){
        //重置select
        this.refs.yearIn.value = this.state.year;
    }

    modifyAction(){
        // 获得用户输入的内容
        let {name, sex, year, like, sign} = this.state;

        // 将数据传递给list
        center.$emit('modify-data', {
            name, sex, year, like, sign
        })

        // 让app显示新增
        this.props.handleFinish();
    }

    handleChange(flag, event){
        this.setState(
            {[flag]: event.target.value}
        );
    }

    handleLike(event){
        let newLike;
        if(event.target.checked){
            //保存value
            this.state.like.push(event.target.value);
            newLike = this.state.like;
        }else{
            //移除value
            newLike = this.state.like.filter(likeItem=>{
                return likeItem != event.target.value;
            })
        }
        this.setState({like: newLike});
    }

    

}