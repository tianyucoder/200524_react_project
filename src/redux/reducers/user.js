import {SAVE_USER} from '../constant'

const initState = {}
export default function(preState=initState,action){
	const {type,data} = action
	switch (type) {
		case SAVE_USER:
			return data
		default:
			return preState
	}
}