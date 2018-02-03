//webpack编译的配置文件

//向外输出webpack编译的配置规则
module.exports = {
	//入口文件
	entry: './src/main.js',
	//输出文件
	output: {
		//输出文件路径
		path: __dirname+'/dist',
		filename: 'vendor.js'
	}
}
