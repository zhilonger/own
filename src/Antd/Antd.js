import React, { Component } from 'react';
import Axios from 'axios';
import Url from 'url';

import { Table, Divider, Tag,Pagination   } from 'antd';
import 'antd/dist/antd.css';
import './antd.css';
export default class Antd extends Component {
    constructor(){
        super();
        this.state = {
            list:[],
            current:0,
            pageSize:5,
            pageSizeOptions:'10',
            obj:{}
        }
    }

    componentDidMount() {
        Axios.get('http://elm.cangdu.org/shopping/restaurants?latitude=39.78493&longitude=116.49476&offset=0&limit=30&extras[]=activities&keyword=&restaurant_category_id=&restaurant_category_ids[]=&order_by=&delivery_mode[]=').then((res)=> {
            // debugger;    //断点，可以停下来查看每个参数的数据
            // console.log(res.data);
            this.setState({
                list:res.data
            });
            // console.log(this.state.list.length);
        })
    }

    onChange(page){
        console.log(page);
        // console.log(pageSize);

        // this.setState({
        //     current: page
        // });

    };
    render() {
        return (
            <div className='Antd_table1'>
                <h2>Antd</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Img</th>
                            <th>Name</th>
                            <th>Distance</th>
                            <th>Rating</th>
                            <th>Time</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.list.map((item,index)=>{
                                return(
                                    <tr key={index}>
                                        <td>
                                            <img src={'https://elm.cangdu.org/img/' + item.image_path } alt=""/>
                                        </td>
                                        <td>{item.name}</td>
                                        <td>{item.distance}</td>
                                        <td>{item.rating} 分</td>
                                        <td>{item.order_lead_time}</td>
                                        <td>{item.address}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <Pagination pagination={{pageSize:5}} dataSource={this.state.list} onChange={this.onChange} total={this.state.list.length-1} />
            </div>
        )
    }
}

