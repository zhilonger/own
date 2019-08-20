import React, { Component } from 'react';
import {fetchListaction} from "../../api/produt";
import {fetchTypeaction} from '../../api/produt'
import { Table,Icon, Input, InputNumber, Popconfirm, Form,Button,Pagination } from 'antd';
import { Resizable } from 'react-resizable';
import {BrowserRouter,HashRouter,Link,Route,Redirect,Switch} from 'react-router-dom'

const ResizeableTitle = props => {
    const { onResize, width, ...restProps } = props;

    if (!width) {
        return <th {...restProps} />;
    }

    return (
        <Resizable
            width={width}
            height={0}
            onResize={onResize}
            draggableOpts={{ enableUserSelectHack: false }}
        >
            <th {...restProps} />
        </Resizable>
    );
};



export default class Goodstype extends Component {
    constructor() {
        super();
        this.state = {
            list:[],
            columns: [
                {
                    title: '编号',
                    dataIndex: 'id',
                    width: 80,
                },
                {
                    title: '类型名称',
                    dataIndex: 'name',
                    width: 300,
                },
                {
                    title: '属性数量',
                    dataIndex: 'attributeCount',
                    width: 100,
                },
                {
                    title: '参数数量',
                    dataIndex: 'paramCount',
                    width: 100,
                },
                {
                    title: '设置',
                    render: () =>
                        <div>
                            <Button size='small'>属性列表</Button>
                            <Button size='small' >参数列表</Button>
                        </div>,
                    width: 100,
                },
                {
                    title: '操作',
                    render: () =>
                        <div>
                            <Button size='small'>编辑</Button>
                            <Button size='small' type='danger'>删除</Button>
                        </div>,
                    width: 100,
                }
            ]
        }
    }

    componentDidMount() {
        let params = {
            pageSize: 100,
            pageNum:1
        };
        fetchTypeaction(params).then((res)=>{
            console.log(res)
            this.setState({
                list:res.data.data.list
            })
            console.log(this.state.list)
        })
    }

    components = {
        header: {
            cell: ResizeableTitle,
        },
    };

    handleResize = index => (e, { size }) => {
        this.setState(({ columns }) => {
            const nextColumns = [...columns];
            nextColumns[index] = {
                ...nextColumns[index],
                width: size.width,
            };
            return { columns: nextColumns };
        });
    };


    render() {
        const columns = this.state.columns.map((col, index) => ({
            ...col,
            onHeaderCell: column => ({
                width: column.width,
                onResize: this.handleResize(index),
            }),
        }));
    return (
      <div className="Goodstype">
          <div className='web_class'>
              <div className='header'>
                  <div>
                      <Icon type="profile" />
                      <span>数据列表</span>
                  </div>
                    <Button size='small'>添加</Button>
              </div>
          <Table bordered components={this.components} columns={columns} dataSource={this.state.list} />
          </div>

      </div>
    )
  }
}
