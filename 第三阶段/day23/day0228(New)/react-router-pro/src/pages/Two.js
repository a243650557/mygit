import React, {Component} from 'react'

export default class Two extends Component{
    
    constructor(){
        super();
        
    }

    render(){
        console.log(this.props.location);
        console.log(this.props.test);
        return (
            <div>
                <h1>two</h1>

            </div>
        )
    }


}