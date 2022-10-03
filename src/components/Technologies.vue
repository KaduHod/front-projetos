<template lang="">
    <div>
      <div ref="botao" class="link" data-bs-toggle="modal" data-bs-target="#modal">
        <span>Téconologias</span>
        <!-- <Modal /> -->
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
    tecs:{
      type:Array,
      required:true
    },
    projectName:{
      type:String,
      required:true
    }
  },
  setup(props, {attrs, slots, emit, expose}){
    const {tecs, projectName} = props;
    const modalId = 'modal-' + slug(props.projectName);
    const botao = ref(null)
    
    onMounted(async () => {
      botao.value.addEventListener('click', setModalContent)
    })
    
    function showModal(prop){
      
    }
    const setTecList = (acc, tec) => {
      const imageLink = '/icons/' + getIconImage[tec.name];
      if(!tec.name) return acc;
      acc+= '<li>';
      acc+= `<img ref="img" src="${imageLink}" title="${tec.name}" alt="${tec.name}">`;
      acc+= `<span>${tec.name}</span>`;
      acc+= '</li>';
      return acc;
    } 
    const getListOfTecs = () => {
      let front = tecs['Front-end'].reduce(setTecList, '');
      let back = tecs['Back-end'].reduce(setTecList, '');
      let server = tecs['Server'].reduce(setTecList, '');
      let versionamento = tecs['Versionamento'].reduce(setTecList, '');
      front         = `<div class="tec-container" ><h3>Front end</h3><ul>${front}</ul></div>`;
      back          = `<div class="tec-container" ><h3>Back end</h3><ul> ${back}</ul></div>`;
      server        = `<div class="tec-container" ><h3>Servidor</h3><ul> ${server}</ul></div>`;
      versionamento = `<div class="tec-container" ><h3>Versionamento</h3><ul>${versionamento}</ul></div>`;
      return `<div class="tecs-container-modal">${front}${back}</div><div class="tecs-container-modal">${server}${versionamento}</div>`;
    }

    const setModalContent = () => {
      document.getElementById('modal-content').innerHTML = getListOfTecs()
    }

    return {
      modalId,
      botao,
      showModal,
      modal,
      setModalContent
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