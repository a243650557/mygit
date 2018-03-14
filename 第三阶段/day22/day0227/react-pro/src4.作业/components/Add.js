import React, {Component} from 'react'

export default class Add extends Component{

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

    render(){
        let {name, sex, year, sign} = this.state;

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
                                <input type="checkbox" value={likeItem} onChange={this.handleLike.bind(this)}/>
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

        return (
            <div className="add">
                <h1>新增</h1>
                {nameDom}
                {sexDom}
                {yearDom}
                {likeDom}
                {signDom}
                <button onClick={this.addAction.bind(this)}>新增</button>
                <button>取消</button>
            </div>
        );
    }

    componentDidMount(){
        //重置select
        this.refs.yearIn.value = this.state.year;
    }

    addAction(){
        // 获得用户输入的内容
        console.log(this.state.name);
        console.log(this.state.sex);
        console.log(this.state.year);
        console.log(this.state.like);
        console.log(this.state.sign);

    }

    // handleName(event){
    //     this.setState({name: event.target.value});
    // }

    // handleSex(event){
    //     this.setState({sex: event.target.value});
    // }

    // handleYear(event){
    //     this.setState({year: event.target.value});
    // }

    // handleSign(event){
    //     this.setState({sign: event.target.value});
    // }

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