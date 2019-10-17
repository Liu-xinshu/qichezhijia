import React,{Component} from 'react';
import axios from 'axios';
import '@/css/find.scss';




class Find extends Component{
    state={
        list:null
    }
    changeScroll(item){
       document.documentElement.scrollTop= this.refs['title_'+item].offsetTop-44;
       console.log(document.documentElement.scrollTop)
    }
    render(){
        let {list}=this.state;
        return<div className='find'>
          
               {
                   list&&Object.keys(list).map((item,index)=><div key={index}
                   ref={'title_'+item}
                   >
                   <h3>{item}</h3>
                   <ul>
                       {list&&list[item].map((item1,index1)=>
                        <li key={index1}><img src={item1.CoverPhoto} alt=""/><span>{item1.Name}</span></li>
                        )}
                   </ul>
                  </div>)
               }
           
            <ol>
               {list&&Object.keys(list).map((item,index)=>{
                   return <li key={index}
                   onClick={this.changeScroll.bind(this,item)}
                   >{item}</li>
               })}
           </ol>
        </div>
    }
    async componentDidMount(){
        let res=await axios.get('/get/data');
        this.setState({
            list:res.data.obj
        })
    }
}

export default Find;