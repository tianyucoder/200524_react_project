import ajax from '@/utils/ajax'

export const reqAllCountryList = ()=>{
	return ajax({
		url:'/common/countryData'
	})
}