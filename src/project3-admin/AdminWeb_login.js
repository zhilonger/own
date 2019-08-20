import React from 'react';
import { login } from './api/login';
import './AdminWeb_login.css';
import * as Cookie from './utils/cookie';
import { Alert,message } from 'antd';
import AdminWeb_home from './AdminWeb_home';
import { BrowserRouter ,HashRouter,Redirect, Route, Link,Switch } from 'react-router-dom';

export default class Login extends React.Component {
    constructor() {
        super();
        this.state={
            userInfo:'',
            psdInfo:'',
            userReg:false,
            psdReg:false,
            showUserInfo:{display:'none'},
            showPsdInfo:{display:'none'},
            userName:'',
            psd:'',
            ajaxDone:true,
        }
    }
    // 接口都要封装

    //登录验证
    submit() {
        //如果自定义请求状态为true,就请求接口，同时变为false
        if(this.state.ajaxDone){
            //如果用户名和密码都通过本地验证，再去请求接口
            if(this.state.userReg && this.state.psdReg){
                //请求状态变为false
                this.setState({
                    ajaxDone:false
                });
                //请求接口
                login(this.state.userName, this.state.psd).then(response => {
                    console.log(response)
                    //如果响应码为200，代表成功，设置token和cookie
                    if(response.data.code == 200){
                        const tokenStr = response.data.data.tokenHead + response.data.data.token;
                        // 把接口返回的token 存到cookie中，这样之后的所有接口 在访问时，才能在cookie 中拿到cookie 并通过
                        //      请求头的 Authorization 携带到后台。
                        Cookie.setCookie('loginToken', tokenStr, 3);
                        message.success(response.data.message);
                        this.props.history.push('/home')

                    }else{      //如果响应码为其他，提示响应码对应的信息
                        message.error(response.data.message);
                    }
                    //请求接口完成后，请求状态变回true，可进行下一次请求
                    this.setState({
                        ajaxDone:true,
                    })
                });
            }else{      //如果用户名和密码不通过本地验证，不能发起请求，并提示有误
                message.error('用户名或密码输入有误');
            }
        }
    }

    //用户名验证
    userReg(e){
        var arr1 = e.target.value;
        if(!arr1){      //如果为空，提示信息框
            this.setState({
                showUserInfo:{display:'block'},
                userInfo:'用户名不能为空'
            })
        }else{      //否则验证通过
            this.setState({
                showUserInfo:{display:'none'},
                userInfo:'',
                userReg:true,
                userName:e.target.value
            })
        }
    }

    //密码验证
    psdReg(e){
        var arr2 = e.target.value;
        var reg = /^\d{6,}$/;   //定义正则

        if(!reg.test(arr2)){        //如果正则不通过，提示信息框
            this.setState({
                showPsdInfo:{display:'block'},
                psdInfo:'密码不符合规则'
            })
        }else{      //否则验证通过
            this.setState({
                showPsdInfo:{display:'none'},
                psdInfo:'',
                psdReg:true,
                psd:e.target.value
            })
        }
    }

    render() {
        return(
            <div className='admin_login'>
                <div className='login_center'>
                    <img src={require('./img/img_login/login_logo.png')} className='login_logo'/>
                    <form action="">
                        <input type="text" className='login_user' onBlur={(e)=>{this.userReg(e)}} />
                        <div>
                            <Alert className='alert1' message={this.state.userInfo} type="error" showIcon style={this.state.showUserInfo} />
                        </div>
                        <input type="password" className='login_pass' onBlur={(e)=>{this.psdReg(e)}} />
                        <div>
                            <Alert  className='alert1' message={this.state.psdInfo} type="error" showIcon  style={this.state.showPsdInfo} />
                        </div>
                            <input type="button" value='登录' className='login_btn' onClick={()=>{this.submit()}}/>
                    </form>
                    <img src={require('./img/img_login/login_see.png')} alt="" className='login_see'/>
                </div>
            </div>
        )
    }
}
