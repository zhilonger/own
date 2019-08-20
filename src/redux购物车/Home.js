import React from 'react';
import ShopCar from './ShopCar';

//引入redux的三个文件
import * as ActionEvent from './redux/action/index';
import {connect} from 'react-redux';    //给当前组件注入两个方法
import {bindActionCreators} from 'redux';

class Home extends React.Component{
    constructor(){
        super();
        this.state = {
            list:[
                {title:'奔驰',price:350000},
                {title:'奔驰c200',price:360000},
                {title:'奔驰c300',price:420000},
            ]
        }
    }

    addCar(item){
        // console.log(item);
        console.log(this.props);

        //把数据加入到redux里
        this.props.actionEvent.addCar(item);
    }

    render() {
        return(
            <div>
               <ul>
                   {
                       this.state.list.map((item,index)=>{
                           return(
                               <li key={index}>
                                   <p>{item.title}</p>
                                   <p>{item.price}</p>
                                   <p>
                                       <button onClick={()=>{this.addCar(item)}}>加入购物车</button>
                                   </p>
                               </li>
                           )
                       })
                   }
               </ul>

                <hr/>

                <ShopCar></ShopCar>
            </div>
        )
    }
}
function mapStateProps(state) {
    return{
        reduxData:state
    }
}
function mapDispatchToProps(dispatch) {
    return{
        actionEvent:bindActionCreators(ActionEvent,dispatch)
    }
}
export default connect(
    mapStateProps,mapDispatchToProps
)(Home)