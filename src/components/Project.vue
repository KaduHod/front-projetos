<template>
    <div>
        <h1 class="project-name">{{project.name}}</h1>
        <p class="project-description">{{project.description}}</p>
        <a target="_blank" :href="project.link">Link para o projeto</a> 
        <div class="project-repos">
            <ul v-if="Array.isArray(project.repositorie)">
                <li v-for="repositorie in project.repositorie" :key="repositorie">
                    <a :href="repositorie" target="_blank">
                        {{repositorie}}
                    </a>
                </li> 
            </ul>
            <a :href="project.repositorie" v-else target="_blank" >{{project.repositorie}}</a>
        </div>
        <div class="project-tecs">
            <ul>
                <h3>Ferramentas utilizadas no projeto</h3> 
                <div class="tec-atts" v-for="tec in technologies" :key="tec.name">
                    <IconComponent :tecName="tec.name"/> {{tec.type}} 
                </div>
            </ul>
        </div>
        
    </div>
</template>

<script>
import IconComponent from './Icon.vue'
import { toRefs, toRef } from 'vue'
export default {
    components : {
        IconComponent
    },
    props:{
        project:Object
    },
    setup(props, {attrs, slots, emit, expose}){
        const {project} = toRefs(props);
        
        const firstLetterToUpperCase = ([first, ...rest]) => `${first.toUpperCase()}${rest.join('')}`;
        const technologies = project.value.technologies.map( ({name, type}) => {
            return {name: firstLetterToUpperCase(name), type: firstLetterToUpperCase(type) }
        })
        
        return {
            project,
            firstLetterToUpperCase,
            technologies
        }
    },
    mounted(){
       
    }
}
</script>

<style>
.tec-atts{
    display: flex;
    justify-content: left;
    align-items: center;
    margin-top: 10px;
}
.tec-atts img{
    margin-right: 10px;
}
</style>
