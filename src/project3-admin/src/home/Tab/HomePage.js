import React, { Component } from 'react';
import {Icon} from 'antd';
export default class HomePage extends Component {
    state={
        module2:[
            {
              title:'待付款订单',
              num:10
            },
            {
              title:'已完成订单',
              num:10
            },
            {
              title:'待确认收货订单',
              num:10
            },
            {
              title:'待发货订单',
              num:10
            },
            {
              title:'新缺货登记',
              num:10
            },
            {
              title:'待处理退款申请',
              num:10
            },
            {
              title:'已发货订单',
              num:10
            },
            {
              title:'待处理退货订单',
              num:10
            },
            {
              title:'广告位即将到期',
              num:10
            }
          ],
    }
  render() {
    return (
      <div className="HomePage">
       <div style={{ background: '#fff' }}>
          <div className="content">

            <div className='module1'>
            <div className="item">
              <div className="item-small">
                <div className="font1">后台项目</div>
                <div className="font2">mall</div>
              </div>
              <div className="item-small">
                <div className="font1">前端项目</div>
                <div className="font2">mall-admin-web</div>
              </div>
              <div className="item-small">
                <div className="font1">学习教程</div>
                <div className="font2">mall-learning</div>
              </div>
              <div className="item-small2">
                <div className="icon">
                  <Icon type="container" />
                </div>
                <div className="font3">
                  <div className='one'>今日订单总数</div>
                  <div className='two'>200</div>
                </div>
              </div>
              <div className="item-small2">
              <div className="icon">
                  <Icon type="pay-circle" />
                </div>
                <div className="font3">
                  <div className='one'>今日销售总额</div>
                  <div className='two'>￥5000.00</div>
                </div>
              </div>
              <div className="item-small2">
              <div className="icon">
                  <Icon type="transaction" />
                </div>
                <div className="font3">
                  <div className='one'>昨日销售总额</div>
                  <div className='two'>￥5000.00</div>
                </div>
              </div>
            </div>
            <div className='Public'>
              <div className="img">
                <img src={require('./2.jpg')} alt=""/>
            </div>
            <div className="title">
              mall全套学习教程连载中！
              <span>关注公众</span>
              ，第一时间获取。
            </div>
            </div>
            </div>

            <div className="module2">
              <div className="module-top">待处理事务</div>
              <div className="module-bot">
                {
                  this.state.module2.map((item,i)=>{
                    return(
                       <div className="bot-item" key={i}>
                        {item.title}
                        <span>({item.num})</span>
                      </div>
                    )
                  })
                }
              </div>
            </div>

            <div className="module3">
              <div className="module3-item">
                <div className="module-top">商品总览</div>
                <div className="module-bot">
                  <div className="module-bot-item">
                    <div className="bot-item-num">100</div>
                    <div className="bot-item-font">已下架</div>
                  </div>
                  <div className="module-bot-item">
                    <div className="bot-item-num">400</div>
                    <div className="bot-item-font">已上架</div>
                  </div>
                  <div className="module-bot-item">
                    <div className="bot-item-num">50</div>
                    <div className="bot-item-font">库存紧张</div>
                  </div>
                  <div className="module-bot-item">
                    <div className="bot-item-num">500</div>
                    <div className="bot-item-font">全部商品</div>
                  </div>
                </div>
              </div>
              <div className="module3-item">
                <div className="module-top">用户总览</div>
                <div className="module-bot">
                  <div className="module-bot-item">
                    <div className="bot-item-num">100</div>
                    <div className="bot-item-font">今日新增</div>
                  </div>
                  <div className="module-bot-item">
                    <div className="bot-item-num">200</div>
                    <div className="bot-item-font">昨日新增</div>
                  </div>
                  <div className="module-bot-item">
                    <div className="bot-item-num">1000</div>
                    <div className="bot-item-font">本月新增</div>
                  </div>
                  <div className="module-bot-item">
                    <div className="bot-item-num">5000</div>
                    <div className="bot-item-font">会员总数</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
