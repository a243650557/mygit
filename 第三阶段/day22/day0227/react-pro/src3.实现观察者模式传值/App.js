import React, {Component} from 'react'

import One from './One'
import Two from './Two'

export default class App extends Component{

    constructor(){
        super();
        this.state = {
            isShow: true
        }
    }

    render(){
        let {isShow} = this.state;
        return (
            <div>

                <One/>
                <hr/>
                <button onClick={()=>{
                    this.setState({isShow: !isShow});
                }}>
                    按钮
                </button>
                {isShow&&<Two/>}
            </div>
        );
    }

}