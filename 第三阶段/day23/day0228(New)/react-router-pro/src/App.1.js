import React, {Component} from 'react'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import One from './pages/One'
import Two from './pages/Two'
import Three from './pages/Three'

/*
    {
        path: '/ome',
        component: One
    }
*/

export default class App extends Component{
    
    constructor(){
        super();
    }

    render(){
        return (
            <Router>
            <div>
                <h1>App</h1>
                
                {/* 路由路径匹配相同，渲染方法1：component */}
                <Route path="/one" component={One}/>

                {/* 路由路径匹配相同，渲染方法2：render */}
                <Route path="/two" render={()=>{
                    //提供当路径匹配相同时，需要渲染的dom结构
                    // return <p>test</p>
                    return <Two/>
                }}/>
                {/* 路由路径匹配相同，渲染方法3：children */}
                <Route path="/three" children={()=>{
                    //提供当路径匹配相同时，需要渲染的dom结构
                    return <p>test</p>
                    // return <Two/>
                }} />

                <Link to="/one">one</Link>
                <Link to="/two">two</Link>
                <Link to="/three">three</Link>

            </div>
            </Router>
        )
    }


}