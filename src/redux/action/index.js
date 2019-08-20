// 修改redux 里面的 数据 时要调用的方法

// export default 只能导出一个方法，但这个里面要导出很多方法
// 所以去掉default,导出所有方法，在组件中import * as 导出所有的方法
export function add(data){
    //方法里面的写法 要固定
    return{
        type:'ADD',
        data
    }
}









