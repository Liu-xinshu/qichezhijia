import React, { PureComponent } from 'react';
import {withRouter} from 'react-router-dom';
import '@/css/Head.scss';
class Head extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            navData:[
                {
                    title:"首页",
                    link:'/index/home'
                },
                {
                    title:"找车",
                    link:'/index/find'
                },
                {
                    title:"论坛",
                    link:'/index/forum'
                },
                {
                    title:"二手车",
                    link:'/index/used'
                },
            ],
            ind:0,
            isShow:false,
            flag:false
        }
        this.changeRouter=(index,path)=>{
           this.setState({
               ind:index
           })
           this.props.history.push(path);
        }
        this.changeShow=()=>{
            this.setState({
                isShow:true
            })
        }
        this.destroy=()=>{
            this.setState({
                isShow:false
            })
        }
        this.search=()=>{
            this.props.history.push('/search')
        }
        this.my=()=>{
            this.props.history.push('/my')
        }

    }
    componentDidMount(){
        document.onscroll=()=>{
            if(document.documentElement.scrollTop>56){
                this.setState({
                    flag:true
                })
            }else{
                this.setState({
                    flag:false
                })
            }
        }
    }
    render() {
        const {navData,ind,isShow,flag}=this.state;
        return (
            <>
                <div className='search'>
                   <h2>汽车之家</h2>
                   <div 
                   onClick={this.search.bind(this)}
                   ></div>
                   <div
                    onClick={this.my.bind(this)}
                   >我的</div>
                </div>
                <nav className={`nav ${flag?'sticky':''}`}>
                    <ul>
                       {
                           navData.map((item,index)=>{
                               return <li key={index}
                               className={index===ind?'active':''}
                               onClick={this.changeRouter.bind(this,index,item.link)}
                               >{item.title}</li>
                           })
                       }
                    </ul>
                    <div>
                       <span 
                       onClick={this.changeShow.bind(this)}
                       >服务<span id="span" className={isShow?'actived':''}>▽</span>
                              {isShow?<div className='shade-content'>
                                  <p>123</p>
                                  <p>123</p>
                                  <p>123</p>
                              </div>:null}
                       </span>
                       <span
                       onClick={this.search.bind(this)}
                       >搜索</span>
                      {isShow? <div className='shade' 
                      onClick={this.destroy.bind(this)}
                      ></div>:null}
                       
                    </div>
                </nav>
            </>
        )
    }
}

export default withRouter(Head);