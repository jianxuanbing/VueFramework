<template>
<div class="task_box">
    <div class="task_left" id="task_left">
        <div class="task_left_nav">					
        <ul>
            <li id="index"><router-link :to="'/school'" tag="p">首页</router-link></li>
            <li>
            <p>全校整体情况</p>
            <div class="task_left_nav_box">
                <span class="task_left_nav_box_li" id="hxsj"><div class="task_left_nav_box_li_ioce"></div><router-link :to="'/school/hello'">核心数据查询</router-link></span>
                <span class="task_left_nav_box_li" id="xxjx"><div class="task_left_nav_box_li_ioce"></div><router-link :to="'/school/data'">学校教学情况概览表</router-link></span>
                <span class="task_left_nav_box_li" id="xjjx"><div class="task_left_nav_box_li_ioce"></div><router-link :to="'/school/data'">校级教学管理人员结构</router-link></span>
            </div>
            </li>
        </ul>
        </div>
    </div>
    
    <div class="task_right">
        <div class="project_bottom">        
        <div id="project_bottom_lo" class="project_bottom_lo" title="收起展开" ><img src="../assets/images/left_right.png" id="project_bottom_lo_img" /></div>
        </div>
        <div class="task_right_iframe">
            <router-view></router-view>
        </div>				
    </div>
</div>
</template>
<script>
</script>

<style>
*{margin: 0px;padding: 0px; font-family: "微软雅黑";font-size: 13px;}
li{list-style: none;}
table {border-collapse:collapse}

.task_box{min-width: 1024px; height:100%;background-color: #fff;}
.task_left{width: 235px; float: left;background-color: #263240;height:100%; overflow-y: hidden;overflow-x: hidden;}

.task_left_nav{ position: relative;}
.task_left_nav li{font-size: 13px!important;  background-color: #263240; cursor: pointer; float: left;width: 100%; list-style:none;  font-size:14px}
.task_left_nav li p{margin-left:10px; color: #fff;padding: 12px 0px;}


.task_right{height: 100%;overflow-y: auto;width: 100%;}
.task_right_iframe iframe{float: left;width:99.7%; overflow-y: hidden;border: 0px; margin: 0px; padding: 0px;}
.shou{width:2%;float: left;height: 100%;background-color: #fff;}
.task_right_iframe{width:auto;}

.project_bottom{ width:0.3%;float: left;height: 100%;background-color: #2dc3e8;position: absolute; }

.project_bottom_lo{z-index:2;position: absolute; font-weight: bold; cursor: pointer; width:18px;top: 50%;left:-15px; height:38px;background-color: #2dc3e8;color: #fff; text-align: center; line-height: 40px; font-size: 18px;border-radius:3px 0px 0px 3px;}

#project_bottom_lo_img{width:12px; height: 12px;float: left;margin: 13px 0px 0px 2px;} 

.color{background-color:#222c3a!important;}
.colors{background-color:#1a222c!important;border-left:3px solid #30cded!important;color:#44c2e3!important;}


/*遮罩层*/
.mec_sou_z{display:none;float: left;top: 0px; width: 100%; height: 100%;position: absolute;z-index:1; background-color: #000;opacity: 0.3; filter:Alpha(opacity=30);}

/*加载*/
.mec_sou_img{display: none; width: 100%; height: 100%;position: absolute;z-index:3;top:0px;}
.mec_sou_img img{position:fixed;left:40%;top:50%;margin-left:width/2;margin-top:height/2; width:auto;height:auto;}


.task_left_nav_box{width: 100%;float: left;height: auto;/*display: none;*/}
.task_left_nav_box span{border-left:3px solid #1e2630;background-color: #1e2630; border-top: 1px solid #1E2631; display: inline-block;float: left;width: 90%;height: 35px;line-height: 35px;color: #fff;padding: 0px 5%;}


.task_left_nav_box_li_ioce{float: left;width: 20px;height: 100%;background-image: url(../assets/images/out.png);background-repeat: no-repeat;background-size: auto 100%;}

</style>