import {lazy} from 'react'
const Login = lazy(()=>import('@/pages/Login'))
const CountryPicker = lazy(()=>import('@/pages/CountryPicker'))

export default [
	{
		path:'/login',
		component:Login
	},
	{
		path:'/countrypicker',
		component:CountryPicker
	}
]