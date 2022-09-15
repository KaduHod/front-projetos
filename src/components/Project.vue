<template>
    <div>
        <h1>Titulo/Nome</h1>
        <div>
            <img src="" alt="">
        </div>
        <p>Descrição</p>
        <a href="">link production</a>
        <ul>
            <li>LINK REPOSITORIE</li>
            <li>LINK REPOSITORIE</li>
        </ul>
        <ul>
            <li>
                <h3>Tec used</h3> <IconComponent />
            </li>
            <li>Tecnologie used</li>
            <li>Tecnologie used</li>
            <li>Tecnologie used</li>
            <li>Tecnologie used</li>
            <li>Tecnologie used</li>
        </ul>
        
        <pre>
            {{project.name}}
        </pre>
        
    </div>
</template>

<script>
import IconComponent from './components/Icon.vue'
export default {
    
    components : {
        IconComponent
    },
    props:{
        project:{
            required:true
        }
    },
    data(){
        return {

        }
    },
    mounted(){
       console.log(this.project)
    }
}
</script>

<style>

</style>
