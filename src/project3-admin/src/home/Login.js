import React, { Component } from 'react';
import './login.css';
import { Icon,Input} from 'antd';
import { message, Button } from 'antd';
import {login} from '../api/login';
import * as Cookie from '../utils/cookie';
export default class Login extends Component {
  constructor(){
    super();
    this.state={
      namemsg:'用户名不能为空',
      passmsg:'密码不能为空',
      nameshow:false,
      passshow:false,
      userreg:false,
      passreg:false,
      username:'',
      passname:'',
      ajaxDone:true
    }
  }
  render() {
    return (
      <div className="login">
       <div className='login-box'>
         <div className='Sign'>
         <div className="icons-list">
            <Icon type="shop" className='img-shop'/>
         </div>
         <div className="font">mall-admin-web</div>
         <div className='form'>
            <Input placeholder="请输入用户名" onBlur={(e)=>{this.nameblur(e)}} className='inp' ref='text'/>
            <div style={{display:this.state.nameshow?'block':'none'}}>{this.state.namemsg}</div>
            <Input placeholder="请输入密码" onBlur={(e)=>{this.passblur(e)}} className='inp' ref='pass'/>
            <div style={{display:this.state.passshow?'block':'none'}}>{this.state.passmsg}</div>
            <Button className='btn' onClick={()=>{this.submit()}}>登录</Button>
         </div>
         </div>
       </div>
      </div>
    );
  }
  //登录验证
  submit(){
    if(this.state.ajaxDone){
    if(this.state.userreg && this.state.passreg){
      this.setState({
        ajaxDone:false
      })
      login(this.state.username,this.state.passname).then((response)=>{
        // let data=response.data
        if(response.data.code===200){
          const tokenStr=response.data.data.tokenHead+response.data.data.token
          Cookie.setCookie('loginToken',tokenStr,3)
             this.props.history.push('/Home')
        }
        else{
          message.error(response.data.message);
        }
        this.setState({
          ajaxDone:false
        })
      })
    }else{
      message.error('用户名或密码错误');
    }
  }
}
  //用户名验证
  nameblur(e){
    var val=e.target.value;
    if(!val){
      this.setState({
        nameshow:true
      })
    }else{
      this.setState({
        nameshow:false,
        username:e.target.value,
        userreg:true
      })
    }
  }
  //密码框验证
  passblur(e){
    var val=e.target.value;
    var reg=/^\d{6,}$/
    if(!reg.test(val)){
      this.setState({
        passshow:true
      })
    }else{
      this.setState({
        passshow:false,
        passname:e.target.value,
        passreg:true
      })
    }
  }
}
