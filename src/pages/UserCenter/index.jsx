import React, { Component } from 'react'
import {reqVerifyLogin} from '@/api/login'
import { NavBar,Button,List,Modal} from 'antd-mobile';
import {connect} from 'react-redux'
import './index.less'
import {reqLogout} from '@/api/login'
import {saveUser} from '@/redux/actions/user'

const {Item} = List
const {alert} = Modal

class UserCenter extends Component {

	state = {
		userInfo:{}
	}

	handleLogout = async()=>{
		await reqLogout(this.state.userInfo._id)
		this.props.history.replace('/login')
	}

	logout = ()=>{
		alert('退出登录', '确定退出登录吗？', [
			{ text: '取消'},
			{ text: '确定', onPress:this.handleLogout,style:{backgroundColor:"#F40700",color:'white'}}
		])
	}

	verifyLogin = async()=>{
		try {
			const userInfo =  await reqVerifyLogin()
			this.setState({userInfo})
			this.props.saveUser(userInfo)
		} catch (error) {
			this.props.history.replace('/login')
		}
	}

	componentDidMount(){
		this.verifyLogin()
	}

	render() {
		const {avatar,nickName,phone} = this.state.userInfo
		return (
			<div className="user-center">
				 <NavBar mode="light">个人中心</NavBar>
				 <div className="avatar">
					 <img src={avatar} alt=""/>
				 </div>
				 <span>欢迎，用户：{phone}</span>
				 <List renderHeader={() => '个人信息'} className="info-list">
						<Item extra={nickName}>昵称</Item>
						<Item extra={phone}>手机号</Item>
				 </List>
				<Button onClick={this.logout} type="primary">退出登录</Button>
			</div>
		)
	}
}


export default connect(
	()=>({}),
	{saveUser}
)(UserCenter)
