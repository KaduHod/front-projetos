<template>
    <div class="link">
        <IconComponent :tecName="iconName"  v-if="iconName" />
        <a :target="target" :href="link">{{title}}</a>
    </div>
</template>
<script>
import { toRefs, toRef } from 'vue'
import IconComponent from './Icon.vue'

export default {
    setup(props, {emit, expose, slots, attr}){
        const {link, title, target, iconName} = toRef(props)
        console.log(target)

        return{
            link,
            title,
            target
        }
    },
    props:{
        link:{
            type:String,
            required:true
        },
        title:{
            type:String,
            required:true
        },
        target:{
            type:String,
            required:false
        },
        iconName:{
            type:String,
            required:false
        }
    },
    components: {
        IconComponent
    }
}
</script>
<style>
    .link{
        
        background-color: rgb(255, 255, 255);
        box-shadow: 0px 0px 15px rgba(209, 209, 209, 0.582);
        border-radius: 10px;
        height: 20px;
        width: fit-content;
        padding: 5px;
        padding-left: 20px;
        padding-right: 20px;
        margin-top: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 5 0ms;
    }
    .link:hover{
        background-color: rgb(255, 255, 255);
        transform: scale(1.05);
        box-shadow: 0px 0px 5px rgba(92, 92, 92, 0.637);
    }
    .link a{
       margin-right: 10px; 
    }
</style>