import React, { Component } from 'react'
import { NavBar, Icon,List  } from 'antd-mobile';
import {reqAllCountryList} from '@/api/country'
import './index.less'

const Item = List.Item;
export default class CountryPicker extends Component {

	state = {
		countryList:{},
		pathname:'',
	}

	handleRightNavTouch = (id)=>{
		return ()=>{
			window.location.replace('#'+id)
		}
	}

	handleCheckCountry = (key)=>{
		return ()=>{
			const {pathname} = this.state
			this.props.history.replace(pathname,{countryCode:key})
		}
	}

	//获取所有国家列表
	getAllCountryList = async()=>{
		const countryList = await reqAllCountryList()
		this.setState({countryList})
	}

 	componentDidMount(){
		this.getAllCountryList()
		const {state} = this.props.location
		if(state) this.setState({pathname:state.pathname})
	}

	render() {
		const {countryList} = this.state
		//所有国家首字母的数组
		const keys = Object.keys(countryList)
		return (
			<div className="country-container">
				{/* 导航区 */}
				<NavBar
					mode="light"
					icon={<Icon type="left" />}
					onLeftClick={() => this.props.history.goBack()}
					className="navbar"
				>选择国家</NavBar>
				{/* 国家列表 */}
				<div className="country-list">
					{
						keys.map( key =>(
							<div key={key} className="list-container">
								<span id={key} className="hide-point"></span>
								<List renderHeader={() => key}>
									{
										countryList[key].map((countryObj,index)=>{
											const countryName = Object.keys(countryObj)[0]
											const countryCode = countryObj[countryName]
											return <Item onClick={this.handleCheckCountry(countryCode)} className="list" key={index} extra={'+'+countryCode}>{countryName}</Item>
										})
									}
								</List>
							</div>
						))
					}
				</div>
				{/* 右侧快速选择区 */}
				<div className="right-nav">
					{
						keys.map((key)=>{
							return <span key={key} className="nav-item" onTouchEnd={this.handleRightNavTouch(key)}>{key}</span>
						})
					}
				</div>
			</div>
		)
	}
}
