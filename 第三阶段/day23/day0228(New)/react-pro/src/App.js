import React, {Component} from 'react'

import Add from './components/Add'
import Modify from './components/Modify'
import Show from './components/Show'
import List from './components/List'

const ADD_ID = 0;
const SHOW_ID = 1;
const MODIFY_ID = 2;

export default class App extends Component{

    constructor(){
        super();
        this.state = {
            cardId: ADD_ID,
             showInfo: {},
             modifyInfo: {}
        }
    }

    render(){
        let {cardId, showInfo, modifyInfo} = this.state;
        console.log('render');
        let cardDOM;
        if(cardId == ADD_ID){
            cardDOM = <Add/>;
        }else if(cardId == SHOW_ID){
            cardDOM = <Show {...showInfo} handleFinish={this.handleFinishShowAction.bind(this)}/>;            
        }else if(cardId == MODIFY_ID){
            cardDOM = <Modify {...modifyInfo} handleFinish={this.handleFinishModifyAction.bind(this)}/>;                        
        }
        return (
            <div>
                {cardDOM}
                <hr/>
                <List handleShow={this.handleShowAction.bind(this)}
                    handleModify={this.handleModifyAction.bind(this)}/>
            </div>
        );
    }

    handleShowAction(showInfo){
        //处理查看
        this.setState({
            cardId: SHOW_ID,
            showInfo
        });
    }
    handleFinishShowAction(){
        //处理完成查看
        this.setState({
            cardId: ADD_ID,
            showInfo: {}
        });
    }

    handleModifyAction(modifyInfo){
        console.log(modifyInfo);
        //处理修改
        this.setState({
            cardId: MODIFY_ID,
            modifyInfo
        });
    }

    handleFinishModifyAction(){
        //处理完成修改
        this.setState({
            cardId: ADD_ID,
            modifyInfo: {}
        });
    }

}