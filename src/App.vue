<template>
  <main>
    <PresentationComponent />
    <div v-if="projects">
      <ProjectComponent  v-for=" project in projects" :project="project" :key="project._id"/>
    </div>
  </main>
</template>
<script>
  import IconComponent from './components/Icon.vue'
  import HeaderComponent from './components/Header.vue'
  import ProjectComponent from './components/Project.vue'
  import PresentationComponent from './components/Presentation.vue'
  import {onBeforeMount, ref} from 'vue'
  export default {
    components : {
      IconComponent, HeaderComponent, ProjectComponent, PresentationComponent
    },
    setup(props, {attrs, emit, slots, expose}){
      const projects = ref();
      projects.value = null
      onBeforeMount(async () => {
        try {
          const url = 'https://project-api-carlos.herokuapp.com/list';
          const paramsConfig = {method:'GET', mode:'cors'};
          const res = await fetch(url, paramsConfig)
          const {data} = await res.json()
          projects.value = data
          console.log(projects.value)
        } catch (error) {
          console.log(error)
          projects.value = {error, message:"Erro", data:null}
        }
      })
      
      return{
        projects
      }
    }
  }
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap');
*{
  font-family: 'Poppins', sans-serif;
  margin: 0;
  padding: 0;
}

@media (min-width: 1024px) {
  
}
</style>
