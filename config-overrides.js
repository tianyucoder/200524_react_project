const { 
	override, 
	fixBabelImports,
	addLessLoader,
	addPostcssPlugins
} = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    // libraryName: 'antd', //antd写这个配置
    libraryName: 'antd-mobile', //antd-mobile写这个配置
    libraryDirectory: 'es',
    style: true,
	}),
	addLessLoader({
			lessOptions:{
				javascriptEnabled: true,
		  	// modifyVars: { '@primary-color': 'orange' }, //antd写这个配置
		  	modifyVars: { //antd-mobile写这个配置
					'@brand-primary': '#F40700',
					'@brand-primary-tap':'#b40600'
				},
			}
		}),
	addPostcssPlugins([require("postcss-px2rem")({ remUnit: 37.5 })])
);