//webpack编译的配置文件

//向外输出webpack编译的配置规则
module.exports = {
	//入口文件
	entry: './src/main.js',
	//输出文件
	output: {
		//输出文件路径
		path: __dirname,
		filename: 'dist/vendor.js'
	},
	module: {
		//所有loader的使用规则都在这里配置
		loaders: [
			//一个对象，就是一个处理规则 
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'//使用多个laoder时，使用顺序是逆序
			},
			{
				test: /\.(png|jpeg|jpg|gif|ttf|svg)$/,
				loader: 'file-loader'
			}
			
		]
	}
}
