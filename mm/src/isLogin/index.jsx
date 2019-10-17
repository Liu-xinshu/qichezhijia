import React ,{Component}from 'react';

const isLogin=(Com)=>{
    return class Login extends Component{
        state={
            isLogin:false
        }
        render(){
            return isLogin?<Com {...this.props}/>:null
        }
        componentDidMount(){
            if(window.localStorage.user){
                this.setState({
                    isLogin:true
                })
            }else{
                this.props.history.push('/login')
            }
        }
    }
}
    export default isLogin;