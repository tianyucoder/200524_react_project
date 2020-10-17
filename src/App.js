import React, { Component,Suspense} from 'react'
import {Switch,Route} from 'react-router-dom'
import Loading from '@/components/Loading'
import routes from '@/config/routes'

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
				</Switch>
			</Suspense>
			
		)
	}
}
