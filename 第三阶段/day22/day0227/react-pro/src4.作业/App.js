import React, {Component} from 'react'

import Add from './components/Add'
import Modify from './components/Modify'
import Show from './components/Show'
import List from './components/List'

export default class App extends Component{

    constructor(){
        super();
    }

    render(){
        return (
            <div>
                <Add/>
                <hr/>
                <List/>
            </div>
        );
    }

}