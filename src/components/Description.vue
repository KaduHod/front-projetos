<template>
    <div class="description-container" :class="class">
        <div class="description-item ">
            <h2>{{title}}</h2>
            
            <p v-for="desc in description" :key="i">
                {{desc}}
            </p>
            
        </div>
        <div class="description-item description-image">
            <img ref="img" :src="imageSrc" alt="">
        </div>
    </div>
</template>
<script>
import { toRefs, toRef } from 'vue'
export default {
    props:{
        title:{
            type:String
        },
        description:{
            type:Array
        },
        class:{
            type:String
        },
        imageSrc:{
            type:String
        }
    },
    components:{

    },
    setup(props, {attrs, slots, expose, emit}){
        
        
        
        
        return{
            
            
        }
    },
    mounted(){
        
    }
}
</script>
<style>
.presentation-header{
    display: flex;
    align-items: center;
    justify-content: center;
}
.description-header h1{
    font-size: 60px;
}
.description-header span{
    font-size: 20px;
}
.description-item h2{
    margin-bottom: 20px;
    font-size: 40px;
}
.whiteBC{
    background-color: var(--branco);
}
.description-container{
    display: flex;
}
.flex-direction-row-reverse{
    flex-direction: row-reverse;
}
.flex-direction-row{
    flex-direction: row;
}
.description-item{
    flex: 1;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center ;
    justify-content: space-evenly;
    padding: 0px;
}
.description-item p {
    width: 80%;
    text-align: center;
}
.description-image{
    display: flex;
    flex-direction: column;
    align-items: center ;
    justify-content: center;
}
.description-image img{
    width: 300px;
}
</style>