<template>
    <div class="index_box">
        <!--头部  开始-->
        <div class="header">
            <!--logo  开始-->
            <div class="header_logo">
                <div class="header_logo_img">
                    <img id="header_logo_img" src="../assets/school.png" />
                </div>
                <div class="header_logo_name_box">
                    <div class="header_logo_names_box">
                        <div class="header_logo_name">11111</div>
                        <div class="header_logo_schoolname" title="">11</div>
                    </div>

                    <div class="header_logo_name_xia"></div>
                    <div class="header_logo_xiala">
                        <div class="header_logo_xiala_j"></div>
                        <ul>
                            <li id="personal">个人中心</li>
                            <li id="modify_pass">修改密码</li>
                            <a href="/passport/logout?returnUrl=/passport/mgc_login.html">
                                <li>退出</li>
                            </a>
                        </ul>
                    </div>
                </div>
            </div>
            <!--logo  结束-->

            <!--导航  开始-->
            <div class="header_nav">
                <li id="task">                
                    <div class="header_nav_ioce_cj"></div><router-link v-bind:to="'/data'">数据填报</router-link>
                </li>
                <li id="xjfx">                
                    <div class="header_nav_ioce_cx"></div><router-link v-bind:to="'/school'">校级分析</router-link>
                </li>
            </div>
            <!--导航  结束-->
        </div>
        <!--头部  结束-->
        <!--中部-->
        <div class="index_body">
            <router-view></router-view>
        </div>
    </div>
    
</template>

<script>
export default{    
}
</script>
<style>

/*头部*/
.header{width: 100%; height: 50px;background-color:#46b6bc;float: left;}
.header_logo_name_box{width:180px; height: auto;float: left;}
.header_logo_name_xia{cursor: pointer;margin: 15px 0px 0px 0px;width:11px; height: 11px;float: left; background-repeat: no-repeat; background-position:-93px -5px;}
.header_logo_xiala{display: none; width:auto; height: auto;position: absolute;z-index: 22;/* border: 1px solid #ccc; */top:50px;}
.header_logo_xiala ul{border: 1px solid #ccc;text-align: center;border-radius:5px ;z-index:2;position:relative;background-color:#fff;padding:10px; width:110px; height: 100px;}
.header_logo_xiala ul li{border-bottom: 1px solid #eee;color:#444;cursor: pointer; height:30px;line-height: 30px;width:100%;}
.header_logo_xiala ul li:hover{color:#fff;background-color:#46b6bc;}
.header_logo_xiala_j{z-index:4;position:relative;width: 0;height: 0;border-left: 6px solid transparent;border-right: 6px solid transparent;border-bottom: 10px solid #fff;margin:-9px 0px 0px 10px;float:left;}
.header_logo_schoolname{float:left}
.header_logo_names_box{width:auto; height: 100px;float: left;color:#fff;padding:0px 10px;}
.header_logo_name{margin-top:10px;font-family: Arial,'Hiragino Sans GB',Microsoft YaHei,sans-serif;font-size: 16px!important;}
.header_logo_schoolname{color:#f5f5f5; font-size: 11px!important;width:70px;overflow:hidden;white-space: nowrap;text-overflow:ellipsis;}

/*logo*/
.header_logo{width:225px;height: 50px;  float: left; margin-left: 10px;}
.header_logo_img{z-index:2;position:relative;text-align: center; line-height: 38px;background-color: #fff;width:40px;height: 40px; float: left;border-radius:20px ;margin:5px 0px 0px 0px;}
.header_logo_img img{width:70%;height:70%;}
/*导航*/
.header_nav{width: 50%;height: 100%;float: left;}
.header_nav li{font-family: Arial,'Hiragino Sans GB',Microsoft YaHei,sans-serif;font-size: 16px!important; color: #fff; cursor: pointer; float: left; width:auto;padding: 0px 20px; height:100%; line-height: 50px; text-align: center; color: #fff;}

</style>

