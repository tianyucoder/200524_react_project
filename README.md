## 1.安装MongoDB数据
	文件位置：react_移动端案例_stu\安装包\MongoDB\mongodb_4.0_64位.msi
## 2.配置环境变量
	修改path，追加一个：C:\Program Files\MongoDB\Server\4.0\bin
## 3.建立存放数据的文件夹
	在c盘根路径下建立：
		-data
			-db
			-log
## 4.项目中集成antd
 ### 按需引入：
			(1).yarn add antd ,然后随便引入几个组件，测试一下。
			(2).修改配置：
						(1).yarn add react-app-rewired customize-cra babel-plugin-import
						(2).修改package.json
									"scripts": {
											"start": "react-app-rewired start",
											"build": "react-app-rewired build",
											"test": "react-app-rewired test",
											"eject": "react-scripts eject"
										},
						(3).根目录下创建：config-overrides.js，内容如下：
									const { override, fixBabelImports } = require('customize-cra');
									module.exports = override(
										fixBabelImports('import', {
											libraryName: 'antd',
											libraryDirectory: 'es',
											style: 'css',
										}),
									);
						(4).删除引入全部antd样式的import语句
 ### 自定义主题：：
						(1).yarn add less less-loader
						(2).修改config-overrides.js如下：
								const { override, fixBabelImports,addLessLoader } = require('customize-cra');

								module.exports = override(
									fixBabelImports('import', {
										libraryName: 'antd',
										libraryDirectory: 'es',
										style: true,
									}),
								addLessLoader({
										javascriptEnabled: true,
										modifyVars: { '@primary-color': 'orange' },
									}),
							);
