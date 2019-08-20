import React from 'react';
import { login } from './api/login'
import {fetchList} from './api/produt'
import * as Cookie from './utils/cookie'
export default class Login extends React.Component {
  constructor() {
    super()
  }
  // 接口都要封装   
  submit() {
    let data = { username: 'admin', password: '123456' }
      login('admin', '123456').then(response => {
        const data = response.data
        const tokenStr = data.tokenHead + data.token
        // 把接口返回的token 存到cookie中，这样之后的所欲接口 在访问时，才能在cookie 中拿到cookie 并通过
        //请求头的 Authorization 携带到后台。
        Cookie.setCookie('loginToken', tokenStr, 3)
    })

    let param = {pageSize:100,pageNum:1};
    fetchList(param).then((res)=>{
      console.log(res)
    })
  }

  render() {
    return (
      <div>
        <input type="text"  />  <br />
        <input type="password" /> <br />
        <button onClick={() => { this.submit() }}>登录</button>
      </div>
    )
  }
}