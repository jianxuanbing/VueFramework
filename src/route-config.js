// 定义路由组件
import App from "./App";
import Data from "./components/data";
import School from "./components/school";


// 定义路由配置
module.exports={
    // 配置路由模式:
    // 1、hash:浏览器环境，使用 URL hash 值来作路由。支持所有浏览器，包括不支持 HTML5 History Api 的浏览器
    // 2、history:H5环境，依赖 HTML5 History API 和服务器配置，http://router.vuejs.org/zh-cn/essentials/history-mode.html
    // 3、abstract:Node.js 环境，支持所有 JavaScript 运行环境，如 Node.js 服务器端。如果发现没有浏览器的 API，路由会自动强制进入这个模式。
    mode:"history",
    //路由配置
    routes:[
        {
            path:"/",
            redirect:"/index"
        },
        {            
            path:"/index",
            component:App
        },
        {
            path:"/data",
            component:Data
        },
        {
            path:"/school",
            component:School
        }
    ]
}