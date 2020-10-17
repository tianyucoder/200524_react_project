const { 
	override, 
	fixBabelImports,
	addLessLoader,
	addPostcssPlugins
} = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    // libraryName: 'antd',
    libraryName: 'antd-mobile',
    libraryDirectory: 'es',
    style: true,
	}),
	addLessLoader({
			lessOptions:{
				javascriptEnabled: true,
		  	// modifyVars: { '@primary-color': 'orange' },
		  	modifyVars: { 
					'@brand-primary': '#F40700',
					'@brand-primary-tap':'#b40600'
				},
			}
		}),
	addPostcssPlugins([require("postcss-px2rem")({ remUnit: 37.5 })])
);