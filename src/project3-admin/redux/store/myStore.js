import rootReducer from '../reducers';
import {createStore} from '_redux@4.0.4@redux/index';
function createStoreFn(initialState){
    let store = createStore(rootReducer,initialState)//createStore创建 数据中心 让跟组件可以使用
    return store;
}

export default  createStoreFn;


