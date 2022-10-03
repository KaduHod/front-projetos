<template>
    <div class="link" :class="class">
        <!-- <IconComponent :tecName="iconName"  v-if="iconName" /> -->
        <a :target="target" :href="link">{{title}}</a>
    </div>
</template>
<script>
import { toRefs, toRef } from 'vue'
import IconComponent from './Icon.vue'

export default {
    setup(props, {emit, expose, slots, attr}){
        const {link, title, target, iconName} = toRef(props)
        
        return{
            link,
            title,
            target : target ?? '_blank'
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
        },
        class:{
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
    
    
</style>