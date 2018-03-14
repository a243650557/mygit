import React, {Component} from 'react'

import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom'

import One from './pages/One'
import Two from './pages/Two'
import Three from './pages/Three'
import Hello from './pages/Hello'

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
                
                {/* 
                    Route的属性
                    exact：
                    path	location.pathname	exact	matches?
                    /one	/one/two	        true	no
                    /one	/one/two	         false	yes
                */}

                <Route exact path="/one" component={One}/>
                <Route path="/one/hello" component={Hello}/>
                <Route path="/two"  component={Two}/>
                <Route path="/three"  component={Three} />

                

                {/* <Link to="/one">one</Link>
                <Link to="/one/">one</Link>
                <Link to="/one/hello">hello</Link>

                <Link to="/two">two</Link>
                <Link to="/three">three</Link> */}
                <nav className="tabs">
                <NavLink exact to="/one" activeClassName="test"
                    activeStyle={{
                        color: 'red'
                    }}
                    isActive={()=>{
                        console.log('one active');
                    }}
                    >one</NavLink>
                <NavLink to="/one/hello" activeClassName="test">hello</NavLink>

                <NavLink to="/two" activeClassName="test">two</NavLink>
                <NavLink to="/three" activeClassName="test">three</NavLink>
                </nav>

            </div>
            </Router>
        )
    }


}