<template>
    <div class="main-container-project">
        <h1 class="project-name">{{project.name}}</h1>
        <p class="project-description">{{project.description}}</p>
        <div class="project-tecs">
            <div class="tecs" v-if="sortedTecs['Back-end'].length">
                <h3>Back-end</h3>
                <ul>
                    <li class="tec-atts" v-for="tec in sortedTecs['Back-end']" :key="tec.name">
                        <IconComponent :tecName="tec.name"/> {{tec.name}}
                    </li>
                </ul>
            </div>
            <div class="tecs" v-if="sortedTecs['Front-end'].length">
                <h3>Front-end</h3>
                <ul>
                    <li class="tec-atts" v-for="tec in sortedTecs['Front-end']" :key="tec.name">
                        <IconComponent :tecName="tec.name"/> {{tec.name}}
                    </li>
                </ul>
            </div>
           
            <div class="tecs" v-if="sortedTecs['Server'].length">
                <h3>Server</h3>
                <ul>
                    <li class="tec-atts" v-for="tec in sortedTecs['Server']" :key="tec.name">
                        <IconComponent :tecName="tec.name"/> {{tec.name}}
                    </li>
                </ul>
            </div>
        </div>
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
        project:Object
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
        }, {'Front-end':[],'Back-end':[], 'Server':[]})
        
        return {
            project,
            firstLetterToUpperCase,
            sortedTecs
        }
    },
    mounted(){
       
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
}
.main-container-project h1{
    text-align: center;
}
.project-tecs{
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: left;
}
.tecs h3{
    display: flex;
    align-items: left;
}
.tecs{
    display: flex;
    flex-direction: column;
    width: fit-content;
}
.project-links{
    margin-top: 20px;
    display: flex;
    height: fit-content;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}


</style>
