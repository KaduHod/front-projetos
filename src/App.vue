<template>
  <header></header>
  <main>
    <BannerComponent />
    <ContatoComponent />
    <Description :imageSrc="'/banners/eu.png'" :class="'whiteBC'" :title="'Sobre mim'" :description="['Me chamo Carlos Alberto, natural de Curitiba-Pr. Atualmente trabalho como Desenvolvedor de software Júnior e estudo Ánalise e desenvolvimento de sistemas.',' Considero uma grande paixão todo o processo de desenvolvimento de ferramentas com código, principalmente quando é voltado para área do fitness.','Álem disso fiz 4 anos de Bacharelado em Educação fisica e tenho 1 ano de experiência de trabalho como estagiário na área, onde tive oportunidade de aprender muito sobre esse mundo.']" />

    <Description :imageSrc="'/banners/work.png'" :class="'flex-direction-row-reverse whiteBC'" :title="'Mercado de trabalho'" :description="['Comecei no mercado de trabalho em uma agência como estágiário, onde eu aprendi a ler códigos de terceiros. Lá desenvolvi e fiz manutenção em um aplicativo web voltado para o mercado imobíliario. Lá,  usei PHP e Laravel para o aplicativo web no back-end, e React no front-end. Além disso o aplicativo web possuía algumas rotinas escritas em Node.js.','Atualmente, trabalho como dev júnior mais voltado para o back-end na IESDE. Atuo na empresa com criação e manutenção do sistema EAD de diversas faculdades pelo brasil. Aqui, encontrei um ambiente muito bem estruturado para devs de todos os níveis e onde a rotina de trabalho é agradável e o aprendizado é constante. Utilizamos PHP e Codeigniter no back-end, JQuery no front-end. Nossas apis são feitas em sua maioria em Node.js e algumas com Python. Utilizamos serviços da amazon para toda a nossa infraestrutura.']" />

    <div v-if="projects">
      <div id="projects-title">
        <h1>Projetos pessoais</h1>
    </div>
      <ProjectComponent v-for="(project, key) in projects" :class="key % 2 == 0 ? 'row': 'row-reverse'" :project="project" :key="project._id"/>
    </div>
    <div v-else>
      Aguarde
    </div>
  </main>
  <footer></footer>
</template>
<script>
  import IconComponent from './components/Icon.vue'
  import HeaderComponent from './components/Header.vue'
  import ProjectComponent from './components/Project.vue'
  import ContatoComponent from './components/Contato.vue'
  import BannerComponent from './components/Banner.vue'
  import Description from './components/Description.vue'  
  import {onBeforeMount, ref} from 'vue'
  export default {
    components : {
      IconComponent, 
      HeaderComponent, 
      ProjectComponent, 
      ContatoComponent,
      BannerComponent,
      Description
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
main{
  margin: 0;
}
#projects-title{
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (min-width: 1024px) {
  
}
</style>
