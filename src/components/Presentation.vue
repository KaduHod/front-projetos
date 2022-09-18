<template>
    <div class="presentation-banner">
        <h1>Carlos Alberto Ribas Júnior</h1>
        <span>Desenvolvedor de software Back-end</span>
    </div>
    <div id="about-me">
        <h2>Sobre mim</h2>
        <p>
            Me chamo Carlos Alberto, natural de Curitiba-Pr. Atualmente trabalho como Desenvolvedor de software Júnior e estudo Ánalise e desenvolvimento de sistemas. 
        </p>
        <p>
            Fiz 4 anos de Bacharelado em Educação fisica e tenho 1 ano de experiencia de trabalho como estagiário na área, onde tive oportunidade de aprender muito sobre esse mundo. 
        </p>
        <p>
            Considero uma grande paixão todo o processo de construção de ferramentas com código, principalmente quando é voltado para área do fitness.
        </p>
    </div>
    <div id="work">
        <h2>Minha historia no mercado de trabalho em desenvolvimento de software</h2>
        <p>
            Comecei no mercado de trabalho em uma agência como estágiário, onde eu aprendi a ler códigos de terceiros. Lá desenvolvi e fiz manutenção em um aplicativo web voltado para o mercado imobíliario. Lá,  usei PHP e Laravel para o aplicativo web no back-end, e React no front-end. Além disso o aplicativo web possuía algumas rotinas escritas em Node.js.
        </p>
        <p>
            Atualmente, trabalho como dev júnior mais voltado para o back-end na IESDE. Atuo na empresa com criação e manutenção do sistema EAD de diversas faculdades pelo brasil. Aqui, encontrei um ambiente muito bem estruturado para devs de todos os níveis e onde a rotina de trabalho é agradável e o aprendizado é constante. Utilizamos PHP e Codeigniter no back-end, JQuery no front-end. Nossas apis são feitas em sua maioria em Node.js e algumas com Python. Utilizamos serviços da amazon para toda a nossa infraestrutura.
        </p>
    </div>
    <div id="My-Workflow">
        
    </div>
    <div id="">
        <h2>Contato</h2>
        <ul>
            <LinkComponent :title="'Linkedin'" :iconName="'Linkedin'" :link="'https://www.linkedin.com/in/carlosjrribas98/'"/>   
            <LinkComponent :title="'WhatsApp'" :iconName="'Whats App'" :link="'https://wa.me/554135571982'"/>
            <LinkComponent :title="'GitHub'" :iconName="'GitHub'" :link="'https://github.com/KaduHod'"/> 
        </ul>
    </div>
</template>
<script>
import { toRefs, toRef } from 'vue'
import LinkComponent from './Link.vue'
export default {
    components : {
        LinkComponent
    },
    props:{
       
    },
    setup(props, {attrs, slots, emit, expose}){
        
        return {
           
        }
    },
    mounted(){
       
    }
}
</script>

<style>
.presentation-container{

}

</style>
