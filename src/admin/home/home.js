import React from 'react';
import './home.css';
import * as Cookie from '../utils/cookie';

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
import {BrowserRouter,HashRouter,Link,Route,Redirect,Switch} from 'react-router-dom'
import { Layout, Menu, Icon,Button,Breadcrumb  } from 'antd';
const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;
export default class Home extends React.Component {
    state = {
        collapsed: false,
        flag:false,
        navObj:{
            '/home/Goodslist':['首页','商品','商品列表'],
            '/home/Goodsadd':['首页','商品','添加商品'],
            '/home/Goodsclass':['首页','商品','商品分类'],
            '/home/Goodstype':['首页','商品','商品类型'],
            '/home/Goodsmanage':['首页','商品','商品管理'],
            '/home/Orderlist':['首页','订单','订单列表'],
            '/home/Orderset':['首页','订单','订单设置'],
            '/home/Orderapply':['首页','订单','退货申请处理'],
            '/home/Orderreason':['首页','订单','退货原因设置'],
            '/home/Marseckill':['首页','营销','秒杀活动列表'],
            '/home/Marcoupon':['首页','营销','优惠券列表'],
            '/home/Marbrand':['首页','营销','品牌推荐'],
            '/home/Marnew':['首页','营销','新品推荐'],
            '/home/Marpopularity':['首页','营销','人气推荐'],
            '/home/Marspecial':['首页','营销','专题推荐'],
            '/home/Marposter':['首页','营销','广告列表']
        },
        navList:'首页'
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    componentWillMount() {
        var token = Cookie.getCookie('loginToken');
        console.log(token);
        if(!token){
            // alert('未登录！')
            window.location.href = '/';
        }
        console.log(this.props.history.location);
        if(this.props.history.location.pathname.length>1){
            this.setState({
                navList:this.state.navObj[this.props.history.location.pathname]
            })

            this.props.history.listen((router)=>{
                console.log(this.props.history);
                this.setState({
                    navList:this.state.navObj[this.props.history.location.pathname]
                })
            })
        }
        console.log(this.state.navList);
        console.log(this.state.navObj)
    }

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
                                    <Link to='/home/HomePage'>
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
                                        <Link to='/home/Goodslist'>商品列表</Link>
                                    </Menu.Item>
                                    <Menu.Item key="4">
                                        <Link to='/home/Goodsadd'>添加商品</Link>
                                    </Menu.Item>
                                    <Menu.Item key="5">
                                        <Link to='/home/Goodsclass'>商品分类</Link>
                                    </Menu.Item>
                                    <Menu.Item key="6">
                                        <Link to='/home/Goodstype'>商品类型</Link>
                                    </Menu.Item>
                                    <Menu.Item key="7">
                                        <Link to='/home/Goodsmanage'>品牌管理</Link>
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
                                        <Link to='/home/Orderlist'>订单列表</Link>
                                    </Menu.Item>
                                    <Menu.Item key="9">
                                        <Link to='/home/Orderset'>订单设置</Link>
                                    </Menu.Item>
                                    <Menu.Item key="10">
                                        <Link to='/home/Orderapply'>退货申请处理</Link>
                                    </Menu.Item>
                                    <Menu.Item key="11">
                                        <Link to='/home/Orderreason'>退货原因设置</Link>
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
                                        <Link to='/home/Marseckill'>秒杀活动列表</Link>
                                    </Menu.Item>
                                    <Menu.Item key="13">
                                        <Link to='/home/Marcoupon'>优惠券列表</Link>
                                    </Menu.Item>
                                    <Menu.Item key="14">
                                        <Link to='/home/Marbrand'>品牌推荐</Link>
                                    </Menu.Item>
                                    <Menu.Item key="15">
                                        <Link to='/home/Marnew'>新品推荐</Link>
                                    </Menu.Item>
                                    <Menu.Item key="16">
                                        <Link to='/home/Marpopularity'>人气推荐</Link>
                                    </Menu.Item>
                                    <Menu.Item key="17">
                                        <Link to='/home/Marspecial'>专题推荐</Link>
                                    </Menu.Item>
                                    <Menu.Item key="18">
                                        <Link to='/home/Marposter'>广告列表</Link>
                                    </Menu.Item>
                                </SubMenu>
                            </Menu>
                        </Sider>
                        <div className='Home-right'>
                            <Layout style={{ marginLeft: 200 }}>
                                <Header className='header' style={{ background: '#fff', padding: 0 }}>
                                    <Icon
                                        className="trigger"
                                        type={this.state.collapsed ? 'menu' : 'menu'}
                                        style={{
                                            margin: '24px 16px',
                                            fontSize: '20px',
                                        }}
                                        onClick={this.toggle}
                                    />
                                    <Breadcrumb style={{height:'100%'}}>
                                        {
                                            // this.state.navList
                                            this.state.navList && this.state.navList.map((item,index)=>{
                                            return(

                                                <Breadcrumb.Item key={index}>{item}</Breadcrumb.Item>
                                            )
                                        })
                                        }
                                    </Breadcrumb>
                                </Header>

                                <Content onClick={()=>{this.sign2()}} style={{ margin: '1px 0',padding:'24', overflow: 'initial' }}>
                                    <div>
                                        <Switch>
                                            {/* 首页 */}
                                            <Route path='/home/HomePage' component={HomePage}></Route>
                                            {/* 商品 */}
                                            <Route path='/home/Goodslist' component={Goodslist}></Route>
                                            <Route path='/home/Goodsadd' component={Goodsadd}></Route>
                                            <Route path='/home/Goodsclass' component={Goodsclass}></Route>
                                            <Route path='/home/Goodstype' component={Goodstype}></Route>
                                            <Route path='/home/Goodsmanage' component={Goodsmanage}></Route>
                                            {/* 订单 */}
                                            <Route path='/home/Orderlist' component={Orderlist}></Route>
                                            <Route path='/home/Orderset' component={Orderset}></Route>
                                            <Route path='/home/Orderapply' component={Orderapply}></Route>
                                            <Route path='/home/Orderreason' component={Orderreason}></Route>
                                            {/* 营销 */}
                                            <Route path='/home/Marseckill' component={Marseckill}></Route>
                                            <Route path='/home/Marcoupon' component={Marcoupon}></Route>
                                            <Route path='/home/Marbrand' component={Marbrand}></Route>
                                            <Route path='/home/Marnew' component={Marnew}></Route>
                                            <Route path='/home/Marpopularity' component={Marpopularity}></Route>
                                            <Route path='/home/Marspecial' component={Marspecial}></Route>
                                            <Route path='/home/Marposter' component={Marposter}></Route>
                                            {/*<Redirect to='/home/HomePage'></Redirect>*/}
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
