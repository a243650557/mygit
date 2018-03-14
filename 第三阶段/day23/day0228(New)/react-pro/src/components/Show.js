import React, {Component} from 'react'

export default class Show extends Component{

    constructor(){
        super();
        this.state = {
            name : '',
            sex :'',
            year : '',
            like :[]
        }
    }

    render(){
        let{name, sex, year, like} = this.state;
        return (
            <div className="show" style={{display:this.props.isShowshow}}>
                <h1>查看</h1>
                <p>姓名：{name}</p>
                <p>性别：{sex}</p>
                <p>出生年份：{year}</p>
                <p>兴趣爱好：{like}</p>
                
                <button onClick={this.finishAction.bind(this)}>查看完成</button>
            </div>
        );
    }

    finishAction(){
        
    }

    componentWillMount(){
    

        this.token = PubSub.subscribe(
            'show1-data',
            (event, param) =>{
                // console.log('监听到了comfirmModify-data')
                // console.log('modifyIndex'+modifyIndex);
                let {name, sex, year, like} = param;
                this.state.name = name;
                this.state.sex = sex;
                this.state.year = year;
                this.state.like = like;
                


        
            }
        )
    }

    finishAction(){
        PubSub.publish(
            'show-change',
            0
        )
    }
}