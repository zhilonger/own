import rootReducer from '../reducers/index';
// import {createStore} from 'redux';
// function createStoreFn(initialState){
//     let store = createStore(rootReducer,initialState)//createStore创建 数据中心 让跟组件可以使用
//     return store;
// }
function createStore (reducer)  {
    let state;
    let listeners = [];
    const getState = () => state;
    const dispatch = (action) => {
      state = reducer(state, action);
      listeners.forEach(listener => listener());
    };
    //监测 store数据发生变化时自动触发
    const subscribe = (listener) => {
      listeners.push(listener);
      return () => {
        listeners = listeners.filter(l => l !== listener);
      }
    };
  
    dispatch({});
  
    return { getState, dispatch, subscribe };
  };
export default  createStore(rootReducer);  // 返回一个 store 数据和处理逻辑 


