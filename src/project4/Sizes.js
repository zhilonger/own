import React from 'react';

export default class Pro_sizes extends React.Component{
    constructor(){
        super();
        this.state = {
            list:[
                {size:'XS',check:false},
                {size:'S',check:false},
                {size:'M',check:false},
                {size:'ML',check:false},
                {size:'L',check:false},
                {size:'XL',check:false},
                {size:'XXL',check:false},
            ]
        }
    }
    fnCheck(item,index,e){
        item.check = !item.check;
        this.setState({
            list:this.state.list
        });
        // console.log(item);
        this.props.chooseSize(item);    //子传父   把选中这条数据传递过去
    }

    render() {
        return(
            <div className='pro_sizes'>
                {
                    this.state.list.map((item,index)=>{
                        return(
                            <p key={index} onClick={(e)=>{this.fnCheck(item)}}
                                className={item.check == true?'ac':''}>
                                {item.size}
                            </p>
                        )
                    })
                }
            </div>
        )
    }
}
