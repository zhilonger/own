import React from 'react';

export default class Pro_list extends React.Component{
    constructor(){
        super();
        this.state = {
            size:{},
        }
    }


    render() {
        return(
            <div className='pro_list'>
                {
                    this.props.ListData.map((item,index)=>{
                        return(
                            <div className='list_one' key={index}>
                                <img src={require('./cont1.png')} alt=""/>
                                <p>{item.title}</p>
                                <p>
                                    <span>{item.currencyFormat}</span>
                                    <span className='price'>{item.price}</span>
                                </p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
