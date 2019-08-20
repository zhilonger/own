// data.js  redux 的核心，数据的声明改变 逻辑处理都在这里

//声明数据
let initState = {
    n:1
}

//  redux的数据处理逻辑
// state=initState  函数的参数的默认值
export default function rootReducers(state=initState,action){
    switch(action.type){
        case "ADD":
            return state;
        default:
            return state
    }
    return state;
}


