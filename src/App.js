import React, { Component } from 'react'
import ajax from './utils/ajax'

export default class App extends Component {
	async componentDidMount(){
		const result = await ajax({
			url:'http://localhost:3000/v1/login/phone',
			method:'POST',
			data:{
				phone:'13655663344',
				code:'775879'
			}
		})
		console.log(result);
	}
	render() {
		return (
			<div>
				App....
			</div>
		)
	}
}
