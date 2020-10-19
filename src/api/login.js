import ajax from '@/utils/ajax'

export const reqVerifyCode = (phone)=>{
	return ajax({
		url:'/v1/login/digits',
		method:'POST',
		data:{phone}
	})
}
export const reqLogin = (phone,code)=>{
	return ajax({
		url:'/v1/login/phone',
		method:'POST',
		data:{phone,code}
	})
}