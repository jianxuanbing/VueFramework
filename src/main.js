import Vue from "vue";
import VueRouter from "vue-router";
import VueResource from "vue-resource";
import VueValidator from "vue-validator";
import RouterConfig from "./route-config";

// 路由
Vue.use(VueRouter);
// get json 数据
Vue.use(VueResource);
// 表单验证 
Vue.use(VueValidator);

// 创建一个路由器实例
// 创建实例时可以传入配置参数进行定制，为保持简单，这里使用默认配置
var router=new VueRouter(RouterConfig);

// 路由器需要一个根组件。
// 出于演示的目的，这里使用一个空的组件，直接使用 HTML 作为应用的模板
var app=new Vue({
    router
}).$mount("#app");


// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
Vue.config.devtools=true;

