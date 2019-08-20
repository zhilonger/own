import rootReducer from '../reducers/index';
import {createStore} from 'redux';
function createStoreFn(initialState){
    let store = createStore(rootReducer,initialState)//createStore创建 数据中心 让跟组件可以使用
    return store;
}

export default  createStoreFn;


