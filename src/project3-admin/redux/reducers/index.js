import Data from './data'; // Data 就是我们刚刚声明的数据

import {combineReducers} from '_redux@4.0.4@redux/index';
let rootReducer = combineReducers({Data});// 中间件
export default rootReducer;


