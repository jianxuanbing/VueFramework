
<template>
    <div id="#app">
        <!-- 导航栏 -->
        <my-head></my-head>
    </div>
    
</template>
<script>
// 引入组件
import myHead from "./components/header";

export default{
    name:"app",
    components:{
        myHead
    }
}
</script>
<style>
@import "../static/css/base.css";

</style>
