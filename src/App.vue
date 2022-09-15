<script setup lang="ts">

</script>

<template>
  <header>
    <!-- <HeaderComponent /> -->
    <!-- <IconComponent :fileName="'nodeIcon.png'" /> -->
    <!-- <IconComponent :fileName="'javascriptIcon.png'" /> -->
    <!-- <IconComponent :fileName="'PythonIcon.png'" /> -->
  </header>

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
          const url = 'http://localhost:9999/list-local';
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
        console.log(this.projects)
    }
  }
</script>
<style scoped>


@media (min-width: 1024px) {
  
}
</style>
