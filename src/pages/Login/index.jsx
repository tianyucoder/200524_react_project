import React, { Component } from 'react'
import { NavBar,InputItem,Icon,Button} from 'antd-mobile';
import './index.less'
import github from '@/assets/imgs/github.png'
import qq from '@/assets/imgs/qq.png'
import wechat from '@/assets/imgs/wechat.png'

export default class Login extends Component {

	goCountryPicker = ()=>{
		this.props.history.push('/countrypicker')
	}

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
								<span onTouchEnd={this.goCountryPicker}>+86</span>
								<Icon type="down" />
							</div>
						</InputItem>
						{/* 验证码输入区 */}
						<div className="code">
							<InputItem clear placeholder="请输六位纯数字验证码"/>
							<button className="code_btn">获取验证码(60)</button>
						</div>
				 		{/* 登录按钮 */}
						<Button type="primary" className="login_btn">登录</Button>
						{/* 底部区域 */}
						<footer className="footer">
							<span className="text">其他登录方式</span>
							<div className="type_group">
								<img src={github} alt=""/>
								<img src={qq} alt=""/>
								<img src={wechat} alt=""/>
							</div>
							<div className="info">
								<span>未注册的手机号，验证后会自动创建硅谷账号，登录即代表您同意
									<a href="https://www.baidu.com/">《硅谷隐私政策》</a>
								</span>
							</div>
						</footer>
				 </div>
			</div>
		)
	}
}
