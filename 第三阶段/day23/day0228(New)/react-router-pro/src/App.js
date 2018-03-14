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
                
               
                <Route exact path="/one/:id" component={One}/>


                <Route path="/two"  render={({location, match, history})=>{
                    // console.log(location, match, history);
                    return <Two location={location} test="helloworld"/>
                }}/>
                <Route path="/three"  component={Three} />

                
                <nav className="tabs">
                <NavLink to="/one/1">one1</NavLink>
                <NavLink to="/one/2">one2</NavLink>
                <NavLink to={{
                    pathname: "/one/2",
                    state: {
                        test: 'helloworld'
                    }
                }}>one2</NavLink>


                <br/>
                <NavLink to="/two">two</NavLink>
                <NavLink to="/three">three</NavLink>
                </nav>

            </div>
            </Router>
        )
    }


}