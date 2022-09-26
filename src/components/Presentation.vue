<template>
    <div id="about-me" class="whiteBC">
        <div  class="presentation-item ">
            <h2>Sobre mim</h2>
            <div>
                <p>
                    Me chamo Carlos Alberto, natural de Curitiba-Pr. Atualmente trabalho como Desenvolvedor de software Júnior e estudo Ánalise e desenvolvimento de sistemas. Fiz 4 anos de Bacharelado em Educação fisica e tenho 1 ano de experiência de trabalho como estagiário na área, onde tive oportunidade de aprender muito sobre esse mundo. Considero uma grande paixão todo o processo de desenvolvimento de ferramentas com código, principalmente quando é voltado para área do fitness.
                </p>
            </div>
        </div>
        <div id="work" class="presentation-item">
            <h2>Mercado de trabalho</h2>
            <div>
                <p>
                    Comecei no mercado de trabalho em uma agência como estágiário, onde eu aprendi a ler códigos de terceiros. Lá desenvolvi e fiz manutenção em um aplicativo web voltado para o mercado imobíliario. Lá,  usei PHP e Laravel para o aplicativo web no back-end, e React no front-end. Além disso o aplicativo web possuía algumas rotinas escritas em Node.js.
                </p>
                <br>
                <p>
                    Atualmente, trabalho como dev júnior mais voltado para o back-end na IESDE. Atuo na empresa com criação e manutenção do sistema EAD de diversas faculdades pelo brasil. Aqui, encontrei um ambiente muito bem estruturado para devs de todos os níveis e onde a rotina de trabalho é agradável e o aprendizado é constante. Utilizamos PHP e Codeigniter no back-end, JQuery no front-end. Nossas apis são feitas em sua maioria em Node.js e algumas com Python. Utilizamos serviços da amazon para toda a nossa infraestrutura.
                </p>
            </div>
        </div>
    </div>
</template>
<script>
import { toRefs, toRef } from 'vue'
export default {
    components : {
        
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
.presentation-header{
    display: flex;
    align-items: center;
    justify-content: center;
}
.presentation-header h1{
    font-size: 60px;
}
.presentation-header span{
    font-size: 20px;
}
.presentation-item{
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center ;
    justify-content: center;
    padding: 100px;
}
.presentation-item h2{
    margin-bottom: 20px;
    font-size: 40px;
}

#contato ul{
    display: flex;
    width: 100%;
    justify-content: space-around;
}
.whiteBC{
    background-color: var(--branco);
}
#about-me{
    display: flex;
}

</style>
