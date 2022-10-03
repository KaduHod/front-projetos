<template>
    <div class="main-container-project" :class="class">
        <div class="project-item">
            <div class="project-item-title">
                <h2 class="project-name">{{project.name}}</h2>
            </div>
            <div class="project-item-content">
                <p class="project-description">{{project.description}}</p>
                <div class="project-links">
                    <Link :link="project.link" :title="'Link para o projeto'" :target="'_blank'" />
                    <!-- <div class="project-repos"> -->
                        <!-- <ul v-if="Array.isArray(project.repositorie)"> -->
                            <!-- <li v-for="repositorie in project.repositorie" :key="repositorie"> -->
                                <!--  <Link  :link="repositorie" :target="'_blank'" :title="'Repositório'" /> --> 
                            <!-- </li>  -->
                        <!-- </ul> -->
                        <!--  <Link v-else  :link="project.repositorie" :target="'_blank'" :title="'Repositório'" /> --> 
                    <!-- </div> -->
                    <Technologies :projectName="project.name" :tecs="sortedTecs" />
                    <Repositories :projectName="project.name" :tecs="sortedTecs" />
                   
                </div>   
            </div>
        </div>
        <div class="project-item">
            <div class="project-image-container">
                <img src="/banners/eu.png" alt="">
            </div>
        </div>      
    </div>
</template>
<script>
import Icon from './Icon.vue';
import Link from './Link.vue';
import Modal from './Modal.vue';
import Technologies from './Technologies.vue';
import Repositories from './Repositories.vue';
import { toRefs, toRef } from 'vue';
import { getAreaName } from '../Utils/tecs.ts';
export default {
    components : {
        Icon, Link, Modal, Technologies, Repositories
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
    display: flex;
    height: fit-content;
    border: 1px solid rgba(255, 0, 0, 0);
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
    padding: 10px;
    transition: 100ms;
}
.tecs-names-list h3:hover{
    background-color: var(--branco-claro);
    border-radius: 15px;
    box-shadow: 0px 0px 10px rgba(170, 170, 170, 0.493);
    cursor: pointer;
}
.tecs-names-list-active{
    background-color: var(--branco-claro);
    border-radius: 15px;
    box-shadow: 0px 0px 10px rgba(170, 170, 170, 0.493);
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

.project-tec-icons{
    width: 100%;
    display: flex;
}
.project-tec-icons-container{
    width: 80%;
    justify-content: space-evenly;
    display: flex;
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
.project-image-container{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}
</style>
