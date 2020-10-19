//该文件是对axios的二次封装，可以：进度条效果、统一修改请求头、统一处理错误等等
import axios from 'axios'
//引入NProgress制作请求进度条效果
import NProgress from 'nprogress'
//引入nprogress样式
import 'nprogress/nprogress.css'
//
import {Toast} from 'antd-mobile'

//创建一个axios实例
const ajax = axios.create({
  baseURL: '/', //请求公共路径
  timeout: 3000, //超时时间
});

//应用请求拦截器
ajax.interceptors.request.use(
	config => {
		//进度条开始走、给所有请求的请求头加token等等
		NProgress.start()
		return config
	}
)

//应用响应拦截器
ajax.interceptors.response.use(
	response => {
		NProgress.done()
		//响应成功了（状态码为2开头）
		console.log('响应拦截器成功的回调执行了');
		if(response.data.code === 20000){
			//业务逻辑成功
			return response.data.data
		}else{
			//业务逻辑失败
			Toast.fail(response.data.message)
			// return Promise.reject(response.data.message)
			return new Promise(()=>{})
		}
	},
	error => {
		NProgress.done()
		//响应失败了（状态码不是2开头）
		console.log('响应拦截器失败的回调执行了',error);
		Toast.fail(error.message)
		// return Promise.reject(error.message)
		return new Promise(()=>{})
	}
)

export default ajax