// 引入必要的模块
var path=require("path");
var express=require("express");
var webpack=require("webpack");
var config=require("../config");
var proxyMiddleware=require("http-proxy-middleware");
var webpackConfig=process.env.NODE_ENV==="testing"?require("./webpack.prod.conf"):require("./webpack.dev.conf");

// 默认端口
var port=process.env.PORT || config.dev.port;
// 定义自定义HTTP代理 后端API
var proxyTable=config.dev.proxyTable;

// 创建 express 实例
var app=express();
// 调用 webpack 并把配置传递过去
var compiler=webpack(webpackConfig);

// 使用 webpack-dev-middleware 中间件
var devMiddleware=require("webpack-dev-middleware")(compiler,{
    publicPath:webpackConfig.output.publicPath,
    stats:{
        colors:true,
        chunks:false
    }
})

var hotMiddleware=require("webpack-hot-middleware")(compiler);

// 当 html-webpack-plugin 模板更改时,重新加载页面
compiler.plugin("compilation",function(compilation){
    compilation.plugin("html-webpack-plugin-after-emit",function(data,cb){
        hotMiddleware.publish({action:"reload"});
        cb();
    })
})

// 代理 API 请求
Object.keys(proxyTable).forEach(function(context){
    var options=proxyTable[context];
    if(typeof options === "string"){
        options={target:options};
    }
    app.use(proxyMiddleware(context,options));
})

// 处理 HTML5 历史API 回退
app.use(require("connect-history-api-fallback")());

// webpack 服务器 打包文件输出
app.use(devMiddleware);

// 启用热重载以及状态保存，显示编译错误
app.use(hotMiddleware);

// 静态资源
var staticPath=path.join(config.build.assetsPublicPath,config.build.assetsSubDirectory);
app.use(staticPath,express.static("./static"));

// 启用服务器
module.exports=app.listen(port,function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log("正在监听 http://localhost:"+port+"\n");
})
