import React from 'react';
import Axios from 'axios';

export default class Ll extends React.Component{
    constructor(){
        super();
        this.state={
            list:[],
            list2:[],
        }
    }

    componentDidMount() {
        Axios.get('http://elm.cangdu.org/v1/cities?type=group').then((res)=>{
            const aa = res.data;
            console.log(aa);
            var ss = Object.keys(aa).sort(function(a, b) {
                    if(a < b) return -1;
                    if(a > b) return 1;
                    return 0;
            });
            this.state.list2 = ss;

            for(let i in aa){
                this.state.list=aa;
                // console.log(i)
            }
            //
            // var bb = ['Ce','Ae','Be']
            // bb.sort((a,b)=>{
            //     if(a < b) return -1;
            //     if(a > b) return 1;
            //     return 0;
            // });
            // console.log(bb)
            this.setState({
                list:this.state.list,
                list2:this.state.list2
            })
            // this.state.list2.sort((s,t)=>{
            //     var a = s.toLowerCase();
            //     var b = t.toLowerCase();
            //     if(a < b) return -1;
            //     if(a > b) return 1;
            //     return 0;
            // })
            console.log(this.state.list2)
            console.log(this.state.list)
        })


    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.list2.map((item,index)=>{
                            return(
                                <li key={index}>
                                   <p>{item}</p>
                                    <ol>
                                        {
                                            this.state.list[item].map((txt,i)=>{
                                                return(
                                                    <li key={i}>{txt.name}</li>
                                                )
                                            })
                                        }
                                    </ol>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}