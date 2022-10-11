const proxy = require('http-proxy-middleware')

module.exports = function(app){
	app.use(

		//筆記
		proxy('/api1', { 	//遇见/api1前缀的请求，就会触发该代理配置
			target:'http://localhost:5000',		//请求转发给谁
			changeOrigin:true,		//控制服务器收到的请求头中Host的值
			pathRewrite:{'^/api1':''} 		//重写请求路径(必须)
		}),

		proxy('/govapi',{
			target:'https://od.moi.gov.tw',
			changeOrigin: true,
			pathRewrite:{'^/govapi':''}
		}),

		proxy('/ntpcapi',{
			target:'https://data.ntpc.gov.tw',
			changeOrigin: true,
			pathRewrite:{'^/ntpcapi':''}
		}),
	)
}