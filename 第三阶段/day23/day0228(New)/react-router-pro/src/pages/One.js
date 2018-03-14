import React, {Component} from 'react'

export default class One extends Component{
    
    constructor(routeProps){
        super();
        console.log(routeProps);
        let {history, match, location} = routeProps;
        console.log('location');
        console.log(location);
        /*
        history作用：
            history.go(n) : 去到第几页
            hisrory.goBack()
            hisrory.goForward()
            hisrory.replace()
            hisrory.push()
        */

        /*
        match作用：
        match.params 取得路径中传递的参数
        */

        /*
        location作用：
        location.state 取得触发路由时传递的参数。
        */

    }

    render(){
        return (
            <div>
                <h1>one</h1>

            </div>
        )
    }


}