import jQuery from "jquery";
import "cropper";

export default{
    deep:true,
    createCropper(el,options,vm){
        options.crop=(event)=>{
            vm.$emit("crop",event);
        },
        jQuery(el).cropper("destroy");
        setTimeout(()=>{
            jQuery(el).cropper(options);
        },0);
    },
    // 绑定，只调用一次，指令第一次绑定到元素时调用，用这个钩子函数可以定义一个在绑定时执行一次的初始化动作。
    bind(el,vm){
        this.vm.$on("rotate",function(deg){
            jQuery(el).cropper("rotate",deg);
        })
    },
    // 更新，被绑定元素所在的模板更新时调用，而不论绑定值是否变化。通过比较更新前后的绑定值，可以忽略不必要的模板更新（详细的钩子函数参数见下）。
    update(el,options,vm){
        this.createCropper(el,options,vm);
    },
    // 解绑，只调用一次， 指令与元素解绑时调用。
    unbind(el,vm){
        jQuery(el).cropper("destroy");
        vm.$off("rotate");
    }
}