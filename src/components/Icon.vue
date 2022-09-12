<template>
    <div class="">
        
        <img ref="img" src="../../../../public/icons/" alt="">
    </div>
</template>
<script>
export default {
    props : {
        fileName: {
            type: String,
            required : false
        },
    },
    data(){
        return {
        
        }
    },
    methods: {
        setPath(){
            this.$refs.img.src += this.fileName
        }
    },
    mounted(){
        console.log(this.fileName)
        this.setPath()
    }
}
</script>
<style>
    *{color: black;}
    img{
        width: 40px;
        height: 40px;
    }
</style>