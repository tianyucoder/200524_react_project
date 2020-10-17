import React, { Component } from 'react'
import { NavBar,InputItem,Icon,Button} from 'antd-mobile';
import './index.less'

export default class Login extends Component {
	render() {
		return (
			<div className="login-wraper">
				 {/* 顶部导航区域 */}
				 <NavBar mode="light">手机验证码登录</NavBar>
				 {/* 内容区 */}
				 <div className="content">
						{/* 手机号输入区 */}
						<InputItem clear placeholder="请输入手机号">
							<div className="phone_country">
								<span>+86</span>
								<Icon type="down" />
							</div>
						</InputItem>
						{/* 验证码输入区 */}
						<div className="code">
							<InputItem clear placeholder="请输六位纯数字验证码"/>
							<button className="code_btn">获取验证码</button>
						</div>
				 </div>
			</div>
		)
	}
}
