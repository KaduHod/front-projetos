<template>
    <div class="">
        <img ref="img" src="../../../../public/icons/" :title="tecName" :alt="tecName">
    </div>
</template>
<script>
import { toRefs, toRef } from 'vue'
import getIconImage from '../Utils/icons.ts'
export default {
    props : {
        tecName: {
            type: String,
            required : false
        },
    },
    setup(props){
        function setPath(){
            this.$refs.img.src += getIconImage[this.tecName]
            console.log(this.$refs.img.src)
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
    img{
        width: 40px;
        height: auto;
    }
</style>