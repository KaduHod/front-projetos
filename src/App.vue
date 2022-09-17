<script setup lang="ts">

</script>

<template>
  
  <main>
    <div v-if="projects.length">
      <ProjectComponent  v-for=" project in projects" :project="project" :key="project._id"/>
    </div>
    
  </main>
</template>
<script>
  import IconComponent from './components/Icon.vue'
  import HeaderComponent from './components/Header.vue'
  import ProjectComponent from './components/Project.vue'
  export default {
    components : {IconComponent, HeaderComponent, ProjectComponent},
    data(){
      return {
        projects:[],
      }
    },
    methods : {
      async getProjects(){
        try {
          const url = 'https://project-api-carlos.herokuapp.com/list';
          const paramsConfig = {method:'GET', mode:'cors'};
          const res = await fetch(url, paramsConfig)
          const {data} = await res.json()
          return data
        } catch (error) {
          console.log(error)
          return {error, message:"Erro"}
        }
      }
    },
    async mounted(){
      this.projects = await this.getProjects()
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
