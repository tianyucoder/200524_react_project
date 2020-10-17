//合并所有的reducer为一个reducer，并暴露
import {combineReducers} from 'redux'
import user from './user'

export default combineReducers({
	user
})