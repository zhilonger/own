import React from 'react';
import './AdminWeb_home.css';
import AdminWeb_home_cont from './AdminWeb_home_cont';
import AdminWeb_commodity_list from './AdminWeb_commodity_list';
import AdminWeb_commodity_add from './AdminWeb_commodity_add';
import AdminWeb_commodity_title from './AdminWeb_commodity_title';
import AdminWeb_commodity_type from './AdminWeb_commodity_type';
import AdminWeb_commodity_manage from './AdminWeb_commodity_manage';
import { BrowserRouter ,HashRouter,Redirect, Route, Link,Switch } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';

const { Header, Sider, Content, } = Layout;
const { SubMenu } = Menu;

export default class AdminWebLogin extends React.Component{
    constructor(){
        super();
        this.state = {
            collapsed: false,
        }
    }
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };


    render() {
        return(
            <div className='AdminWeb_home'>
                <HashRouter>
                <Layout>
                        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                            <div className="logo" />
                            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                                    <Menu.Item key="1">
                                        <Link to='/home'>
                                            <Icon type="home" theme='filled'/>
                                            <span>首页</span>
                                        </Link>
                                    </Menu.Item>
                                    <SubMenu
                                        key="sub1"
                                        title={
                                            <span>
                                                <Icon type="shopping" theme="filled" />
                                                <span>商品</span>
                                            </span>
                                        }
                                    >
                                        <Menu.Item key="2">
                                            <Link to='/pms/product'>
                                                <Icon type="bars" />
                                                <span>商品列表</span>
                                            </Link>
                                        </Menu.Item>
                                        <Menu.Item key="3">
                                            <Link to='/pms/addProduct'>
                                                <Icon type="plus-square" />
                                                <span>添加商品</span>
                                            </Link>
                                        </Menu.Item>
                                        <Menu.Item key="4">
                                            <Link to='/pms/productCate'>
                                                <Icon type="appstore" />
                                                <span>商品分类</span>
                                            </Link>
                                        </Menu.Item>
                                        <Menu.Item key="5">
                                            <Link to='/pms/productAttr'>
                                                <Icon type="profile" />
                                                <span>商品类型</span>
                                            </Link>
                                        </Menu.Item>
                                        <Menu.Item key="6">
                                            <Link to='/pms/brand'>
                                                <Icon type="tag" />
                                                <span>品牌管理</span>
                                            </Link>
                                        </Menu.Item>
                                    </SubMenu>
                                <SubMenu
                                    key="sub2"
                                    title={
                                        <span>
                                    <Icon type="profile" theme="filled" />
                                    <span>订单</span>
                                  </span>
                                    }
                                >
                                    <Menu.Item key="7">
                                        <Icon type="bars" />
                                        <span>订单列表</span>
                                    </Menu.Item>
                                    <Menu.Item key="8">
                                        <Icon type="setting" />
                                        <span>订单设置</span>
                                    </Menu.Item>
                                    <Menu.Item key="9">
                                        <Icon type="import" />
                                        <span>退货申请处理</span>
                                    </Menu.Item>
                                    <Menu.Item key="10">
                                        <Icon type="audit" />
                                        <span>退货原因设置</span>
                                    </Menu.Item>
                                </SubMenu>

                                <SubMenu
                                    key="sub3"
                                    title={
                                        <span>
                                    <Icon type="calendar" theme="filled" />
                                    <span>营销</span>
                                  </span>
                                    }
                                >
                                    <Menu.Item key="11">
                                        <Icon type="dashboard" />
                                        <span>秒杀活动列表</span>
                                    </Menu.Item>
                                    <Menu.Item key="12">
                                        <Icon type="money-collect" />
                                        <span>优惠券列表</span>
                                    </Menu.Item>
                                    <Menu.Item key="13">
                                        <Icon type="tag" />
                                        <span>品牌推荐</span>
                                    </Menu.Item>
                                    <Menu.Item key="14">
                                        <Icon type="star" />
                                        <span>新品推荐</span>
                                    </Menu.Item>
                                    <Menu.Item key="15">
                                        <Icon type="thunderbolt" />
                                        <span>人气推荐</span>
                                    </Menu.Item>
                                    <Menu.Item key="16">
                                        <Icon type="project" />
                                        <span>专题推荐</span>
                                    </Menu.Item>
                                    <Menu.Item key="17">
                                        <Icon type="link" />
                                        <span>广告列表</span>
                                    </Menu.Item>
                                </SubMenu>
                            </Menu>
                        </Sider>
                        <Layout>
                            <Header className='homeCont_side' style={{ background: '#fff', padding: 0 }}>
                                <Icon
                                    className="trigger"
                                    type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                    onClick={this.toggle}
                                />
                                <span>首页</span>
                            </Header>
                            <Content style={{padding: 24,background: '#fff',minHeight: 280,}}>
                                    <div>
                                        <Switch>
                                            <Route path='/home' component={AdminWeb_home_cont} />
                                            <Route path='/pms/product' component={AdminWeb_commodity_list} />
                                            <Route path='/pms/addProduct' component={AdminWeb_commodity_add} />
                                            <Route path='/pms/productCate' component={AdminWeb_commodity_title} />
                                            <Route path='/pms/productAttr' component={AdminWeb_commodity_type} />
                                            <Route path='/pms/brand' component={AdminWeb_commodity_manage} />
                                            <Redirect to='/home' />
                                        </Switch>
                                    </div>
                            </Content>
                        </Layout>
                    </Layout>
            </HashRouter>
            </div>
        )
    }
}
