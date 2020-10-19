import {lazy} from 'react'
const Login = lazy(()=>import('@/pages/Login'))
const CountryPicker = lazy(()=>import('@/pages/CountryPicker'))
const UserCenter = lazy(()=>import('@/pages/UserCenter'))

export default [
	{
		path:'/login',
		component:Login
	},
	{
		path:'/countrypicker',
		component:CountryPicker
	},
	{
		path:'/usercenter',
		component:UserCenter
	}
]