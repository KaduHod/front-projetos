<template>
    <div class="main-container-project" :class="class">
        <div class="project-item">
            <div class="project-item-title">
                <h2 class="project-name">{{project.name}}</h2>
            </div>
            <div class="project-item-content">
                <p class="project-description">{{project.description}}</p>
                <div class="project-links">
                    <LinkComponent :link="project.link" :title="'Link para o projeto'" :target="'_blank'" />
                    <div class="project-repos">
                        <ul v-if="Array.isArray(project.repositorie)">
                            <li v-for="repositorie in project.repositorie" :key="repositorie">
                                <LinkComponent  :link="repositorie" :target="'_blank'" :title="'Repositório'" />
                            </li> 
                        </ul>
                        <LinkComponent v-else  :link="project.repositorie" :target="'_blank'" :title="'Repositório'" />
                    </div>
                </div>
            </div>
            
        </div>
        <div class="project-item">
            <div class="project-item-title">
                <h2>Tecnologias</h2>
            </div>
            <div class="project-item-content">
                <div class="project-tecs">
                    <div class="tecs-names-list">
                        <h3 v-if="sortedTecs['Back-end'].length">Back-end</h3>
                        <h3 v-if="sortedTecs['Front-end'].length">Front-end</h3>
                        <h3 v-if="sortedTecs['Server'].length">Servidor</h3>
                        <h3 v-if="sortedTecs['Versionamento'].length">Versionamento</h3>
                    </div>
                    <div class="project-tec-icons">
                        <li class="tec-atts" v-for="tec in sortedTecs['Server']" :key="tec.name"> 
                             <IconComponent :tecName="tec.name"/> {{tec.name}} 
                        </li> 
                        
                    </div>
                        
                        <!-- <ul> -->
                            <!-- <li class="tec-atts" v-for="tec in sortedTecs['Back-end']" :key="tec.name"> -->
                                <!-- <IconComponent :tecName="tec.name"/> {{tec.name}} -->
                            <!-- </li> -->
                        <!-- </ul> -->
                            
                            
                        
                        <!-- <ul> -->
                            <!-- <li class="tec-atts" v-for="tec in sortedTecs['Front-end']" :key="tec.name"> -->
                                <!-- <IconComponent :tecName="tec.name"/> {{tec.name}} -->
                            <!-- </li> -->
                        <!-- </ul> -->
                            
                        
                        <!-- <ul> -->
                            <!-- <li class="tec-atts" v-for="tec in sortedTecs['Server']" :key="tec.name"> -->
                                <!-- <IconComponent :tecName="tec.name"/> {{tec.name}} -->
                            <!-- </li> -->
                        <!-- </ul> -->
                            
                        
                        <!-- <ul> -->
                            <!-- <li class="tec-atts" v-for="tec in sortedTecs['Versionamento']" :key="tec.name"> -->
                                <!-- <IconComponent :tecName="tec.name"/> {{tec.name}} -->
                            <!-- </li> -->
                        <!-- </ul> -->
                    
                </div>
            </div>
        </div>      
    </div>
</template>
<script>
import IconComponent from './Icon.vue'
import LinkComponent from './Link.vue'
import { toRefs, toRef } from 'vue'
import { getAreaName } from '../Utils/tecs.ts'
export default {
    components : {
        IconComponent, LinkComponent
    },
    props:{
        project:Object,
        class : {
            type:String
        },
        chave: {
            type:String
        }
    },
    setup(props, {attrs, slots, emit, expose}){
        const {project} = toRefs(props);

        const firstLetterToUpperCase = ([firstLeter, ...rest]) => `${firstLeter.toUpperCase()}${rest.join('')}`;

        const technologies = project.value.technologies.map( ({name, type}) => {
            return {name: firstLetterToUpperCase(name), type: firstLetterToUpperCase(type) }
        })

        const sortedTecs = technologies.reduce((acc, tec)=>{
            const {name} = tec;
            const {area, error} = getAreaName(name)
            if(area) acc[area].push(tec);
            if(error) console.error(area);
            return acc
        }, {'Front-end':[],'Back-end':[], 'Server':[],'Versionamento':[]})       
        
        return {
            project,
            firstLetterToUpperCase,
            sortedTecs,
            
        }
    },
    mounted(){
       console.log(this.class)
    }
}
</script>

<style>
ul{
    padding: 0;
    margin: 0;
    list-style: none;
}



.tec-atts{
    display: flex;
    justify-content: left;
    align-items: center;
    margin-top: 10px;
}
.tec-atts img{
    margin-right: 10px;
}
.main-container-project{
    height: 100vh;
    display: flex;
    background-color: var(--branco);
}
.row-reverse{
    flex-direction: row-reverse;
}
.row{
    flex-direction: row;
}
.main-container-project h2{
    text-align: center;
}


.project-links{
    margin-top: 20px;
    display: flex;
    height: fit-content;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}
.project-repos ul {
    margin: 0;
    padding: 0;
    display: flex;
}
.project-repos ul li {
    margin: 10px;
}

.tecs-names-list{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.tecs h3{
    display: flex;
    align-items: left;
}
.tecs-names-list h3{
    border-bottom: 2px solid rgba(0, 0, 0, 0);
    transition: 100ms;
}
.tecs-names-list h3:hover{
    border-bottom: 2px solid black;
    cursor: pointer;
}
.tecs-names-list-active{
    border-bottom: 2px solid black;
}
.project-tecs{
    display: flex;
    flex-direction: column;
    justify-content: start;
    width: 100%;
    height: 70vh;
}

.project-item-title{
    height: 30vh;
    display: flex;
    align-items: center;
}



.project-item{
    display: flex;
    flex-direction: column;
    align-items: center ;
    flex: 1;
}
.project-item p {
    width: 80%;
    text-align: center;
}

.project-item-content{
    height: 70vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}
</style>
