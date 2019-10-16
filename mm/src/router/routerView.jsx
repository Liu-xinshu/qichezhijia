


import React from 'react';
import {
    Switch,
    Route,
    Redirect
}from 'react-router-dom';


function RouterView(props){
    let {routes}=props;
    let RouterArr=routes&&routes.filter(item=>!item.to);
    let RedirectArr=routes&&routes.filter(item=>item.to).map((item,index)=><Redirect from ={item.from} to={item.to} key={index}/>);
    return <Switch>
        {RouterArr&&RouterArr.map((item,index)=>{
            return <Route key={index} path={item.path} render={(prop)=>{
                let allProps={...prop,...props};
                return <item.component {...allProps} routes={item.children}/>
            }}/>
        }).concat(RedirectArr)}
    </Switch>
}

export default RouterView;