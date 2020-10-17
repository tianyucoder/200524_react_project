import React, { Component,Suspense} from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
import Loading from '@/components/Loading'
import routes from '@/config/routes'
import '@/assets/css/reset.css'
import '@/assets/css/main.less'

export default class App extends Component {
	render() {
		return (
			<Suspense fallback={<Loading/>}>
				<Switch>
					{
						routes.map((route)=>(
							<Route key={route.path} {...route}/>
						))
					}
					<Redirect to="/login"/>
				</Switch>
			</Suspense>
			
		)
	}
}
