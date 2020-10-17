//引入createStore，applyMiddleware--创建store、执行中间件
import {createStore,applyMiddleware} from 'redux'
//引入thunk用于异步编码
import thunk from 'redux-thunk'
//引入合并后的reducer
import reducer from '@/redux/reducers'
//引入applyMiddleware——开发者工具
import {composeWithDevTools} from 'redux-devtools-extension'

export default createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))