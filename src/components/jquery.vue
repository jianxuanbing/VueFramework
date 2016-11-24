
<template>
    <div>
        <button id="toggle" v-on:click="toggleCropper">显示/隐藏</button>
        <img v-if="showCropper" v-cropper="cropOptions" src="https://i.imgur.com/WcvkCxl.png" alt="jQuery Meme"/>
        <input id="zoomable" type="checkbox" v-model="cropOptions.zoomable"/>
        <button v-on:click="$emit('rotate',90)">旋转90°</button>
        <pre id="output">
            x:{{ cropData.x }}
            y:{{ cropData.y }}
            width:{{ cropData.width }}
            height:{{ cropData.height }}
        </pre>
    </div>        
    
</template>
<script>
import Cropper from "../directives/Cropper";

export default{
    directives:{
        Cropper
    },
    data(){
        return{
            cropData:{},
            cropOptions:{
                viewModel:0,
                zoomable:false
            },
            showCropper:false
        }
    },
    events:{
        crop:function(event){
            this.cropData={
                x:event.x,
                y:event.y,
                width:event.width,
                height:event.height
            }
        }
    },
    methods:{
        toggleCropper(event){
            this.showCropper=!this.showCropper;
        }
    },
    beforeMount:function(){
        console.log("创建");
    }
}
</script>

<style>
@import "../../node_modules/cropper/dist/cropper.css";
</style>