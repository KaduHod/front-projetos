<template>
    <div class="contact-container">
        <img ref="img" src="" :title="tecName" :alt="tecName">
    </div>
</template>
<script>
import {toRefs, toRef} from 'vue'
import getIconImage from '../Utils/icons.ts'
export default {
    props : {
        tecName: {
            type: String,
            required : false
        },
    },
    setup(props, ctx){
        function setPath(){
            this.$refs.img.src = '/icons/' + getIconImage[this.tecName]
        }
        const {tecName} = toRefs(props)
        
        return{
            tecName: tecName.value,
            setPath
        }
    },
    mounted(){
        this.setPath()
    }
}
</script>
<style>
    *{color: black;}
    .contact-container img{
        width: 30px;
        height: auto;
        transition: 100ms;
    }
    .contact-container img:hover{
        transform: scale(1.3);
        cursor: pointer;
    }
</style>