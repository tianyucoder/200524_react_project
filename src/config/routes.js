import {lazy} from 'react'
const Login = lazy(()=>import('@/pages/Login'))
const Test = lazy(()=>import('@/pages/Test'))

export default [
	{
		path:'/login',
		component:Login
	},
	{
		path:'/test',
		component:Test
	}
]