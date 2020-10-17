//此文件用于支持rem适配
function adapter (){
	const dp = document.documentElement.clientWidth
	const rootFontSize = dp/10
	document.documentElement.style.fontSize = rootFontSize + 'px'
}
adapter()
window.onresize = adapter