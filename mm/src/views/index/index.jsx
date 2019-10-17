import React,{Component} from 'react';
import RouterView from '@/router/routerView.jsx';
import Head from '@/components/Head/index.jsx';
import '@/css/global.css';


class Index extends Component{
    render(){
        return<div className='index'>
            <Head/>
            <RouterView routes={this.props.routes}/>
        </div>
    }
}

export default Index;