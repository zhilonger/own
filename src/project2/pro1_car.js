import React from 'react';
import Axios from 'axios';

export default class Pro1_car extends React.Component{
    constructor(){
        super();
        this.state = {
            list:[]
        }
    }


    render() {
        return(
            <div>
                {/*<input type="checkbox" name="" id=""/>*/}
                {/*<span>商品1</span>*/}
                {/*<button>--</button>*/}
                {/*<input type="text" value='0' />*/}
                {/*<button>++</button>*/}
                {/*<span>单价：19</span>*/}

                {/*<div>*/}
                {/*    <input type="checkbox" value='全选'/>*/}
                {/*    <span>总价：0元</span>*/}
                {/*</div>*/}

            </div>
        )
    }
}