// redux 的核心，数据的声明改变 逻辑处理都在这里

let initState = {
    list:[],
    userInfo:{}
}

export default function rootReducers(state=initState,action){
//    console.log(action)
    switch(action.type){
        case "LOGIN":

            return state
      
        default:
           return state
    }
    return state;
}


