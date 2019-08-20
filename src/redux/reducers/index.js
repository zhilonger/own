import Data from './data'; // Data 就是我们刚刚声明的数据

import {combineReducers} from 'redux';
let rootReducer = combineReducers({Data});// 中间件
//导出Data
export default rootReducer;


