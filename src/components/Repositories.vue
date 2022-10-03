<template lang="">
    <div>
      <div ref="botao" class="link" data-bs-toggle="modal" data-bs-target="#modal">
        <span>Repositórios</span>
      </div>
    </div>
</template>
<script>
import {onBeforeMount, ref,  toRefs, toRef, onMounted} from 'vue';
import getIconImage from '../Utils/icons.ts';
import Modal from './Modal.vue';
import {slug} from '../Utils/string.ts';
export default {
  components:{
    Modal
  },
  props:{
    repositories:{
      type:Array,
      required:true
    },
    projectName:{
      type:String,
      required:true
    }
  },
  setup(props, {attrs, slots, emit, expose}){
    const {repositories, projectName} = props;
    const modalId = 'modal-' + slug(props.projectName);
    const botao = ref(null)
    
    return {
      
    }
  }
}
</script>
<style >
    .tec-container{
      display: flex;
      flex-direction: column;
      width: 50%;
    }
    .tec-container h3{
      text-align: center;
    }
    .tec-container ul{
      display: flex;
      flex-direction: column;
      margin: 10px 0px 10px 0px;
      justify-content: center;
      align-items: flex-start;
    }
    .tec-container li{
      display: flex;
      padding: 5px;
      padding-left: 20px;
      justify-content: center;
      width: 100%;
      
    }
    .tec-container span{
      display: flex;
      width: 100px;
      align-items: center;
    }
    .tecs-container-modal{
      display: flex;
      margin-top: 10px;
    }
    
</style>