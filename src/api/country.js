import ajax from '@/utils/ajax'

export const reqAllCountryList = ()=>{
	return ajax({
		url:'/v1/common/countryData'
	})
}