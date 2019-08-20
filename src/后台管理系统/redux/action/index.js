// 修改redux 里面的 数据 时要调用的方法
export function login(data){
    //方法里面的写法 要固定
    return{
        type:'LOGIN', 
        data
    }
}

export function logout(data){
    //方法里面的写法 要固定
    return{
        type:'LOGOUT', 
        data:data
    }
}

export function getUserInfo(data){
    //方法里面的写法 要固定
    return{
        type:'GETUSERINFO', 
        data:data
    }
}









