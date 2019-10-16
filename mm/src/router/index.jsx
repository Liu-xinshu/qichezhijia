import React from 'react';
import {BrowserRouter}from 'react-router-dom';
import routes from './routerConfig';
import RouterView from './routerView';
function RootRouter(){
    return <BrowserRouter>
         <RouterView routes={routes}/>
    </BrowserRouter>
}

export default RootRouter;

