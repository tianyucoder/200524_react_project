//该文件是对axios的二次封装，可以：进度条效果、统一修改请求头、统一处理错误等等
import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

//创建一个axios实例
const ajax = axios.create({
  baseURL: '/',
  timeout: 3000,
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