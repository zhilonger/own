import React, { Component } from 'react';
import Axios from 'axios';
import Swiper from 'swiper/dist/js/swiper.js';
import 'swiper/dist/css/swiper.min.css';
import List from "./List";

// const demoImgArr = ["nav1","nav2","nav3","nav4","nav5","nav6","nav7","nav8"];
// const demoImgArr2 = ["cont1","cont2"];
// const ticks = demoImgArr.map(item => require("./img/img-Home/" + item + ".png"));
// const tick2 = demoImgArr2.map(item => require("./img/img-Home/" + item + ".png"));
export default class Cont extends Component {
    constructor(){
        super();
        this.state = {
            list:[],
            list2:[]
            // [
            //     { description: "苦了累了，来点甜的",icon_url: "",id: 20,image_url: "/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg",is_in_serving: true,link:'',title: "甜品饮品",title_color: ""},
            //     { description: "苦了累了，来点甜的",icon_url: "",id: 20,image_url: "/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg",is_in_serving: true,link:'',title: "甜品饮品",title_color: ""},
            //     { description: "苦了累了，来点甜的",icon_url: "",id: 20,image_url: "/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg",is_in_serving: true,link:'',title: "甜品饮品",title_color: ""},
            //     { description: "苦了累了，来点甜的",icon_url: "",id: 20,image_url: "/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg",is_in_serving: true,link:'',title: "甜品饮品",title_color: ""},
            //     { description: "苦了累了，来点甜的",icon_url: "",id: 20,image_url: "/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg",is_in_serving: true,link:'',title: "甜品饮品",title_color: ""},
            //     { description: "苦了累了，来点甜的",icon_url: "",id: 20,image_url: "/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg",is_in_serving: true,link:'',title: "甜品饮品",title_color: ""},
            //     { description: "苦了累了，来点甜的",icon_url: "",id: 20,image_url: "/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg",is_in_serving: true,link:'',title: "甜品饮品",title_color: ""},
            //     { description: "苦了累了，来点甜的",icon_url: "",id: 20,image_url: "/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg",is_in_serving: true,link:'',title: "甜品饮品",title_color: ""},
            // ],
            // [
            //     { description: "苦了累了，来点甜的",icon_url: "",id: 20,image_url: "/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg",is_in_serving: true,link:'',title: "甜品饮品",title_color: ""},
            //     { description: "苦了累了，来点甜的",icon_url: "",id: 20,image_url: "/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg",is_in_serving: true,link:'',title: "甜品饮品",title_color: ""},
            //     { description: "苦了累了，来点甜的",icon_url: "",id: 20,image_url: "/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg",is_in_serving: true,link:'',title: "甜品饮品",title_color: ""},
            //     { description: "苦了累了，来点甜的",icon_url: "",id: 20,image_url: "/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg",is_in_serving: true,link:'',title: "甜品饮品",title_color: ""},
            //     { description: "苦了累了，来点甜的",icon_url: "",id: 20,image_url: "/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg",is_in_serving: true,link:'',title: "甜品饮品",title_color: ""},
            //     { description: "苦了累了，来点甜的",icon_url: "",id: 20,image_url: "/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg",is_in_serving: true,link:'',title: "甜品饮品",title_color: ""},
            //     { description: "苦了累了，来点甜的",icon_url: "",id: 20,image_url: "/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg",is_in_serving: true,link:'',title: "甜品饮品",title_color: ""},
            //     { description: "苦了累了，来点甜的",icon_url: "",id: 20,image_url: "/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg",is_in_serving: true,link:'',title: "甜品饮品",title_color: ""},
            // ]
        }
    }
    componentDidMount() {
        //导航轮播数据
        Axios.get('http://elm.cangdu.org/v2/index_entry?geohash=39.78493,116.49476&group_type=1&flags[]=F').then((res)=>{
            console.log(res.data[0]);
            if(res.data.length > 0){        //请求到数据后才加载数据

                var arr = this.mySort(res.data);

                this.setState({
                    list:arr
                });

                var swiper = new Swiper('.swiper-container',{
                    pagination:{
                        el:'.swiper-pagination',
                    },
                });
            }
        });

        //列表数据
            Axios.get('http://elm.cangdu.org/shopping/restaurants?latitude=39.78493&longitude=116.49476&offset=0&limit=30&extras[]=activities&keyword=&restaurant_category_id=&restaurant_category_ids[]=&order_by=&delivery_mode[]=').then((res)=> {
                // debugger;    //断点，可以停下来查看每个参数的数据
                console.log(res.data);
                this.setState({
                    list2:res.data
                })
            })
            //异步加载，所以数据会有2s左右的延迟，
            //此时如果在数据拿到之前去传递到List组件，会是空的
            //所以在List组件做三元运算，如果this.state.list长度>0,则开始传递
    }

    mySort(arr){
        //把这个数组按照8个一组，分成若干个二维数组     [[8],[8],[8],...]
        var arrList = [];
        for(var i=0,j=0;i<arr.length;i+=8,j++){     // i=0 j=0      i=8 j=1
            //  arrList[[0,,,7],[8,,,16]]
            //  arrList[0] = [0,,,7]    arrList[1] = [8,,,16]
            arrList[j] = arr.slice(i,i+8);
        }
        // console.log(arrList);
        return arrList;
    }


    render() {
        return (
            <div className="Cont">
                <div className="nav">
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            {
                                this.state.list.map((item,index)=>{
                                     return(
                                        <div className="swiper-slide" key={index}>
                                            {
                                                item.map((i,index)=>{
                                                    return(
                                                        <div className="one" key={index}>
                                                            <img src={'https://fuss10.elemecdn.com/' + i.image_url } alt=""/>
                                                            <p>{i.title}</p>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
                {this.state.list2.length>0?<List data={this.state.list2}></List>:''}
            </div>
        );
    }
}

