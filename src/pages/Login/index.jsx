import React, { Component } from 'react'
import { NavBar,InputItem,Icon,Button,Toast} from 'antd-mobile';
import './index.less'
import github from '@/assets/imgs/github.png'
import qq from '@/assets/imgs/qq.png'
import wechat from '@/assets/imgs/wechat.png'

const phoneReg = /^(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/
const codeReg = /^\d{6}$/
export default class Login extends Component {

	state = {
		countryCode:'86',//国家代码
		isFirst:true,//是否第一次打开login页面
		phone:'', //收集手机号
		code:'', //收集验证码
		time:10, //验证码倒计时
		canClick:true //验证码按钮是否可以点击
	}

	//收集登录表单数据---受控组件
	saveData = (type)=>{
		return (value)=>{
			this.setState({isFirst:false})
			if(type === 'phone'){
				if(phoneReg.test(value)) this.setState({phone:value,phoneHasError:false})
				else this.setState({phone:'',phoneHasError:true})
			}else{
				if(codeReg.test(value)) this.setState({code:value,codeHasError:false})
				else this.setState({code:'',codeHasError:true})
			}
		}
	}

	//获取验证码
	getVerifyCode = ()=>{
		console.log('请求服务器获取一个验证码');
		this.setState({canClick:false})
		this.timer = setInterval(()=>{
			let {time} = this.state
			time--
			if(time <= 0){
				console.log('@');
				clearInterval(this.timer)
				this.setState({time:20,canClick:true})
				return
			}
			this.setState({time})
		},1000)
	}

	//跳转到手机号国家选择器
	goCountryPicker = ()=>{
		const {pathname} = this.props.location
		this.props.history.push('/countrypicker',{pathname})
	}

	componentDidMount(){
		//获取当前路径
		const {state} = this.props.location
		//维护手机号国家代码
		if(state) this.setState({countryCode:state.countryCode})
	}

	componentWillUnmount(){
		//清除验证码倒计时定时器
		clearInterval(this.timer)
	}

	render() {
		//获取状态中的值
		const {countryCode,phone,code,isFirst,time,canClick} = this.state
		return (
			<div className="login-wraper">
				 {/* 顶部导航区域 */}
				 <NavBar mode="light">手机验证码登录</NavBar>
				 {/* 内容区 */}
				 <div className="content">

						{/* 手机号输入区 */}
						<InputItem 
							clear 
							placeholder="请输入手机号"
							error={!phone && !isFirst} //手机号没有值，且不是第一次点击，证明输入有错
							onErrorClick={()=>Toast.fail('手机号不合法！')}
							onChange={this.saveData('phone')}
						>
							<div className="phone_country" onTouchEnd={this.goCountryPicker}>
								<span>+{countryCode}</span>
								<Icon type="down" />
							</div>
						</InputItem>

						{/* 验证码输入区 */}
						<div className="code">
							<InputItem 
								clear 
								placeholder="请输六位纯数字验证码"
								onChange={this.saveData('code')}
								onErrorClick={()=>Toast.fail('验证码为6位纯数字')}
								error={!code && !isFirst}
							/>
							<button 
								className="code_btn"
								//手机号输入合法，且验证码按钮允许点击，则变为激活颜色，否则置灰
								style={{color:phone && canClick ? 'red' :'gray'}}
								//手机号输入合法，且验证码按钮允许点击，绑定事件，否则绑定空函数
								onTouchEnd={phone && canClick ? this.getVerifyCode : ()=>{}}
							>
								获取验证码{canClick ? '' : `(${time})`}
							</button>
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
