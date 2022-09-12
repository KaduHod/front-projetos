<script setup lang="ts">

</script>

<template>
  <header>
    <HeaderComponent />
    <IconComponent :fileName="'nodeIcon.png'" />
    <IconComponent :fileName="'javascriptIcon.png'" />
    <IconComponent :fileName="'PythonIcon.png'" />

    
  </header>

  <main>
  
  </main>
</template>
<script>
  import IconComponent from './components/Icon.vue'
  import HeaderComponent from './components/Header.vue'
  export default {
    components : {IconComponent, HeaderComponent},
    data(){
      return {

      }
    },
    methods : {

    },
    mounted(){
        console.log('oi')
    }
  }
</script>
<style scoped>


@media (min-width: 1024px) {
  
}
</style>
