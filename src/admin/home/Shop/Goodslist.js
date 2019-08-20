import React, { Component } from 'react'
import {fetchList} from '../../api/produt'
import "./Goodlist.css"
import {Select, Icon,Input,Switch,Pagination} from 'antd';
import {BrowserRouter,HashRouter,Link} from 'react-router-dom'

const { Option } = Select;
export default class Goodslist extends Component {
    constructor(){
        super();
        this.state={
            list:[],
            checked:false,
            allChecked: false
        }
    }
      onSelectChange = selectedRowKeys => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
      }
    componentDidMount(){
        let params = {
            pageSize: 100,
            pageNum:1
        };
        fetchList(params).then((res)=>{
            // console.log(res)
            this.setState({
                list:res.data.data.list
            })
            console.log(this.state.list)
        })
    }
    page(pageNumber) {
         let param = {pageSize:100,pageNum:pageNumber};
        fetchList(param).then((res)=>{
           
            this.setState({
                list:res.data.data.list
            })
            // console.log(this.state.list)
          })
        // console.log(pageNumber)
    }
    render() {
        return (
            <div className='web_list'>
               <div className="com-search">
                {/* 头第一部分 */}
                <div className="search-result">
                <div><Icon type="search" />筛选搜索</div>
                 <div><button>搜索结果</button></div>
                <div><button>重置</button></div>        
                </div>{/* 头第一部分 */}
                <ul className="searchcategory">
                    <li><p>输入搜索:</p><Input placeholder="商品名称" className="input-1" onChange={(e)=>{this.inputv(e)}}/></li>
                    <li><p>商品货号:</p><Input placeholder="商品货号" className="input-1" /></li>
                    <li><p>商品分类:</p>
                    <Select
                    className="input-1"
                showSearch
                style={{ width: 200 }}
                placeholder="服装/外套"
                optionFilterProp="children"
                filterOption={(input, option) =>
                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                <Option value="jack">服装/外套</Option>
                <Option value="lucy">手机数码</Option>
                <Option value="tom">家用电器</Option>
            </Select>,</li>
                    <li><p>商品品牌:</p><Input placeholder="商品品牌" className="input-1" /></li>
                    <li><p>上架状态:</p><Input placeholder="上架状态" className="input-1" /></li>
                    <li><p>审核状态:</p><Input placeholder="全部" className="input-1" /></li>
                </ul>
               </div>
               {/* 第二部分 */}
               <div className="numlist">
               <div className="search-result">
                <div><Icon type="aiconleft" />数据列表</div>
                <div>
                    <Link to='/home/Goodsadd'>
                        <button>添加</button>
                    </Link>
                </div>
                </div>
               </div>
               {/* 第三部分 */}
                <table cellPadding="0" cellSpacing="0" className="com-table" >
                    <thead>
                        <tr>
                        <td><input type="checkbox" onChange={(e)=>{this.selectAll(e)}} checked={this.state.allChecked}/></td>
                        <td>编号</td>
                        <td>商品图片</td>
                        <td>商品名称</td>
                        <td>价格/货号</td>
                        <td>标签</td>
                        <td>排序</td>
                        <td>sku库存</td>
                        <td>销量</td>
                        <td>审核状态</td>
                        <td>操作</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.list.map((item,index)=>{
                                return(
                                    <tr key={index}>
                                        <td><input type="checkbox" checked={item.checked} onChange={(e)=>{this.selectOne(index,e)}}/></td>
                                        <td>{item.id}</td>
                                        <td><img src={item.pic} alt=""/></td>
                                        <td>{item.name}<p>品牌:{item.brandName}</p></td>
                                        <td><p>价格：￥{item.price}</p>
                                        <p>货号：{item.productSn}</p></td>
                                        <td>
                                            <p>上架：<Switch defaultChecked  /></p>
                                            <p>新品：<Switch defaultChecked  /></p>
                                            <p>推荐：<Switch defaultChecked  /></p>
                                        </td>
                                        <td>{item.sort}</td>
                                        <td>
                                        <Icon type="dingtalk-circle" theme="filled" className="circle"/>
                                        </td>
                                        <td>{item.lowStock}</td>
                                        <td><p>未审核</p>  <p>审核详情</p></td>
                                        <td><p className="ppbut"><button>查看</button><button>编辑</button></p>
                                        <p className="ppbut"><button>日志</button><button>删除</button></p></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <div className="com-conter">
                        <Pagination size="small" total={50}  defaultPageSize={5} pageSize={5} showSizeChanger showQuickJumper className="com-paff" onChange={(e)=>{this.page(e)}}/>
                </div>
                {/* 第三部分 */}
            </div>
        )
    }
    //全选
    selectAll(e){
      console.log(e.target.checked)
      this.state.list.map((item)=>{
        item.checked=e.target.checked
      })
      this.setState({
          list:this.state.list,
          allChecked:e.target.checked
      })
    }
    selectOne(index, e) {
        //点击的时候 拿到当前的checkbox的 checked状态
        console.log(index, e.target.checked)
        let res=this.state.list[index];
        res.checked = e.target.checked
        this.setState({
             list: this.state.list
        })
         //每次点击一个勾选框的时候 都判断一次 判断数组中所有的对象的checked 是不是都为true
         this.state.list.forEach((item) => {
            if (item.checked === false) {
                //让全选变成false
                this.setState({
                    allChecked: false 
                })
            }
        })
    }
    inputv(e){ 
        var val=e.target.value;
        var arr=this.state.list.filter(function(item){
            return item.name.indexOf(val)!==-1
        })
        if(arr.length>0){
            this.setState({
                list:arr
            })
        }
    }
}    