import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
	componentDidMount(){
		axios.get('http://localhost:3000/v1/common/countryData').then(
			response => {console.log(response.data);},
			error => {console.log(error);}
		)
	}
	render() {
		return (
			<div>
				App....
			</div>
		)
	}
}
