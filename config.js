var path=require("path");

module.exports={
    build:{
        index:path.resolve(__dirname,"dist/index.html"),
        test:path.resolve(__dirname,"dist/test.html"),
        assetsRoot:path.resolve(__dirname,"dist"),
        assetsSubDirectory:"static",
        assetsPublicPath:"/",
        productionSourceMap:false
    },
    dev:{
        port:8991,
        proxyTable:{}
    }    
}