import React from 'react'
import './Home.css'
//首页
import HomePage from './Tab/HomePage';
//商品
import Goodslist from './Shop/Goodslist';
import Goodsadd from './Shop/Goodsadd';
import Goodsclass from './Shop/Goodsclass';
import Goodstype from './Shop/Goodstype';
import Goodsmanage from './Shop/Goodsmanage';
//订单
import Orderlist from './order/Orderlist';
import Orderset from './order/Orderset';
import Orderapply from './order/Orderapply';
import Orderreason from './order/Orderreason';
//营销
import Marseckill from './Market/Marseckill';
import Marcoupon from './Market/Marcoupon';
import Marbrand from './Market/Marbrand';
import Marnew from './Market/Marnew';
import Marpopularity from './Market/Marpopularity';
import Marspecial from './Market/Marspecial';
import Marposter from './Market/Marposter';
//Antd
import {HashRouter,Link,Route,Redirect,Switch} from 'react-router-dom'
import { Layout, Menu, Icon,Button } from 'antd';
const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;
export default class Home extends React.Component {
  state = {
    collapsed: false,
    flag:false
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    return (
        <div className='Home'>
          <HashRouter>
          
      <Layout>
        <Sider className='Sider' style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
      }}  trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo"/>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
              <div>
                <Link to='/HomePage'>
                  <Menu.Item key="1" style={{lineHeight:'35px'}}>
                    <Icon type="home"  style={{marginRight:'10px'}}/>
                      <span>首页</span>
                  </Menu.Item>
                </Link>
              </div>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="shopping"/>
                  <span>商品</span>
                </span>
              }
            >
              <Menu.Item key="3">
                <Link to='Goodslist'>商品列表</Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to='Goodsadd'>添加商品</Link>
              </Menu.Item>
              <Menu.Item key="5">
                <Link to='Goodsclass'>商品分类</Link>
              </Menu.Item>
              <Menu.Item key="6">
                <Link to='Goodstype'>商品类型</Link>
              </Menu.Item>
              <Menu.Item key="7">
                <Link to='Goodsmanage'>品牌管理</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="container" />
                  <span>订单</span>
                </span>
              }
            >
              <Menu.Item key="8">
                <Link to='Orderlist'>订单列表</Link>
              </Menu.Item>
              <Menu.Item key="9">
                <Link to='Orderset'>订单设置</Link>
              </Menu.Item>
              <Menu.Item key="10">
                <Link to='Orderapply'>退货申请处理</Link>
              </Menu.Item>
              <Menu.Item key="11">
                <Link to='Orderreason'>退货原因设置</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              title={
                <span>
                  <Icon type="carry-out" />
                  <span>营销</span>
                </span>
              }
            >
              <Menu.Item key="12">
                <Link to='Marseckill'>秒杀活动列表</Link>
              </Menu.Item>
              <Menu.Item key="13">
                <Link to='Marcoupon'>优惠券列表</Link>
              </Menu.Item>
              <Menu.Item key="14">
                <Link to='Marbrand'>品牌推荐</Link>
              </Menu.Item>
              <Menu.Item key="15">
                <Link to='Marnew'>新品推荐</Link>
              </Menu.Item>
              <Menu.Item key="16">
                <Link to='Marpopularity'>人气推荐</Link>
              </Menu.Item>
              <Menu.Item key="17">
                <Link to='Marspecial'>专题推荐</Link>
              </Menu.Item>
              <Menu.Item key="18">
                <Link to='Marposter'>广告列表</Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <div className='Home-right'>
        <Layout style={{ marginLeft: 200 }}>
        <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu' : 'menu'}
              style={{
                margin: '24px 16px',
                fontSize: '20px',
              }}
              onClick={this.toggle}
            />
            <Button type="首页" style={{border:'none',color:'#97A8BE'}}>首页</Button>
            <Icon type="apple" theme="filled" className='apple' onClick={()=>{this.sign()}}/>
            <Icon type="caret-down"  className='down'/>
            <div className="sign" style={{display:this.state.flag?'block':'none'}}>
              <div>首页</div>
              <Link to='/'>
                <div onClick={()=>{this.sign2()}}>退出</div>
              </Link>
              
            </div>
          </Header>
      <Content onClick={()=>{this.sign2()}} style={{ margin: '1px 0',padding:'24', overflow: 'initial' }}>
        <div>
          <Switch>
            {/* 首页 */}
            <Route path='/HomePage' component={HomePage}></Route>
            {/* 商品 */}
            <Route path='/Goodslist' component={Goodslist}></Route>
            <Route path='/Goodsadd' component={Goodsadd}></Route>
            <Route path='/Goodsclass' component={Goodsclass}></Route>
            <Route path='/Goodstype' component={Goodstype}></Route>
            <Route path='/Goodsmanage' component={Goodsmanage}></Route>
            {/* 订单 */}
            <Route path='/Orderlist' component={Orderlist}></Route>
            <Route path='/Orderset' component={Orderset}></Route>
            <Route path='/Orderapply' component={Orderapply}></Route>
            <Route path='/Orderreason' component={Orderreason}></Route>
            {/* 营销 */}
            <Route path='/Marseckill' component={Marseckill}></Route>
            <Route path='/Marcoupon' component={Marcoupon}></Route>
            <Route path='/Marbrand' component={Marbrand}></Route>
            <Route path='/Marnew' component={Marnew}></Route>
            <Route path='/Marpopularity' component={Marpopularity}></Route>
            <Route path='/Marspecial' component={Marspecial}></Route>
            <Route path='/Marposter' component={Marposter}></Route>
            <Redirect to='/HomePage'/>
            </Switch>
        </div>
        
      </Content>
    </Layout>
    </div>
      </Layout>
      </HashRouter>
      </div>
    );
  }
  sign(){
    this.setState({
      flag:true
    })
  }
  sign2(){
    this.setState({
      flag:false
    })
  }
}
