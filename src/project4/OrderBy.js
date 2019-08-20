import React from 'react';

export default class Pro_cart extends React.Component{
    constructor(){
        super();
        this.state = {
        }
    }
    fnOrder(e){
        // console.log(e.target.value);

        this.props.order(e.target.value);
    }

    render() {
        return(
            <div className='pro_cart'>
                <div>
                    <label htmlFor="select">Order By </label>
                    <select name="select" id="select" onChange={(e)=>{this.fnOrder(e)}}>
                        <option value='Select'>Select</option>
                        <option value='Lowest to highest'>Lowest to highest</option>
                        <option value='Highest to lowest'>Highest to lowest</option>
                    </select>
                </div>
            </div>
        )
    }
}
