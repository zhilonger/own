import React from 'react';
import './List.css';

export default class List extends React.Component{
    constructor(){
        super();
        this.state ={
            list:[]
        }
    }

    componentDidMount() {
        console.log(this.props.data);

        this.setState({
            list:this.props.data
        })
    }

    render() {
        return (
            <div className='box_li'>
                <ul className='list'>
                    {
                        this.state.list.map((item,index)=>{
                            return(
                                <li key={index}>
                                    {/*<p>{item.name}</p>*/}
                                    <img src={'https://elm.cangdu.org/img/'+item.image_path} className='img1'/>
                                    <div className="right">
                                        <div className='up'>
                                            <p className='p1'>品牌</p>
                                            <p className='p2'>{item.name}</p>
                                        </div>
                                        <div className='down'>
                                            {/*business_license_image: "160e91e0a9f2163.png"*/}
                                            {/*catering_service_license_image: "160e91e17fa2164.png"*/}
                                            <img src={require('./img/img-Home/star1.png')} alt=""/>
                                            <img src={require('./img/img-Home/star1.png')} alt=""/>
                                            <img src={require('./img/img-Home/star1.png')} alt=""/>
                                            <img src={require('./img/img-Home/star1.png')} alt=""/>
                                            <img src={require('./img/img-Home/star1.png')} alt=""/>
                                            <span>{item.rating}</span>
                                            <span>月售{item.recent_order_num}单</span>
                                        </div>
                                    </div>
                                </li>
                                )
                        })
                    }
                </ul>
            </div>
        );
    }
}