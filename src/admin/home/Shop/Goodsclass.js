import React, { Component } from 'react';
import { Button,Icon,Table,Switch ,message,Pagination  } from 'antd';
import './class.css';

import { Resizable } from 'react-resizable';
import {fetchListaction} from "../../api/produt";
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

function onChange(checked) {
  console.log(`switch to ${checked}`);
  // if(!checked){
  // }
}

export default class Goodsclass extends Component {
  constructor(){
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
          title: '分类名称',
          dataIndex: 'keywords',
          width: 200,
        },
        {
          title: '级别',
          dataIndex: 'navStatus',
          width: 80,
        },
        {
          title: '商品数量',
          dataIndex: 'productCount',
          width: 80,
        },
        {
          title: '数量单位',
          dataIndex: 'productUnit',
          width: 80,
        },
        {
          title: '导航栏',
          dataIndex: 'load',
          render: () =><Switch defaultChecked onChange={onChange} />,
          width: 80,
        },
        {
          title: '是否显示',
          dataIndex: 'dis',
          render: () =><Switch defaultChecked onChange={onChange} />,
          width: 80,
        },
        {
          title: '排序',
          dataIndex: 'sort',
          width: 80,
        },
        {
          title: '设置',
          dataIndex: 'set',
          render: () =>
              <div>
                <Button size='small'>查看下级</Button>
                <Button size='small'>转移商品</Button>
              </div>,
          width: 150,
        },
        {
          title: '操作',
          key: 'action',
          render: () =>
              <div>
                <Button size='small'>编辑</Button>
                <Button size='small' type='danger'>删除</Button>
              </div>,
          width: 150
        },
      ],
    }
  }


  componentDidMount() {
    let params = {
      pageSize: 100,
      pageNum:1
    };
    fetchListaction(params).then((res)=>{
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
    )
  }

}
