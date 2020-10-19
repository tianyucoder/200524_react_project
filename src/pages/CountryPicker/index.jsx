import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import {reqAllCountryList} from '@/api/country'

export default class CountryPicker extends Component {

	state = {
		countryList:{}
	}

	//获取所有国家列表
	getAllCountryList = async()=>{
		const result = await reqAllCountryList()
		console.log(result);
	}

 	componentDidMount(){
		this.getAllCountryList()
	}

	render() {
		return (
			<div className="country-container">
				{/* 导航区 */}
				<NavBar
					mode="light"
					icon={<Icon type="left" />}
					onLeftClick={() => this.props.history.goBack()}
				>选择国家</NavBar>
			</div>
		)
	}
}
