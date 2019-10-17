import React, { PureComponent } from 'react'
import axios from 'axios';
import {login}from '@/port/index';
class Login extends PureComponent {

  state = {
         user:'',
         pwd:''
        }

    render() {
        let{user,pwd}=this.state;
        return (
            <div>
                用户名:<input name="user" type='text' value={user}  onChange={this.change.bind(this)}/><br/><br/>
                密码:<input name="pwd" type='password' value={pwd} onChange={this.change.bind(this)}/><br/><br/>
                <button
                onClick={this.Submit.bind(this,user,pwd)}
                >登陆</button>
            </div>
        )
    }
    change(e){
        let key=e.target.name;
        let val=e.target.value;
        this.setState({
            [key]:val
        })
    }
 async  Submit(user,pwd){
        let res=await login({user,pwd});
        if(res.data.code==1){
            alert("登陆成功！");
            window.localStorage.user=user;
            this.props.history.go(-1);
        }else{
            alert("密码错误！");
        }
    }
}

export default Login