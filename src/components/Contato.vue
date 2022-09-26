<template>
    <div>
        <div id="social-media">
            <div id="social-media-flex">
                <div id="social-media-center">
                    <a href="https://www.linkedin.com/in/carlosjrribas98/" target="_blank">
                        <ContactIconComponent :tecName="'Linkedin'" :class="'link-com-icone'" :title="'Linkedin'" :iconName="'Linkedin'" />
                    </a>
                    <a href="https://wa.me/554135571982" target="_blank">
                        <ContactIconComponent :tecName="'Whats App'" :class="'link-com-icone'" :title="'WhatsApp'" :iconName="'Whats App'" />
                    </a>
                    <a href="https://github.com/KaduHod" target="_blank">
                        <ContactIconComponent :tecName="'Git Hub'" :class="'link-com-icone'" :title="'Git Hub'" :iconName="'Git Hub'" />
                    </a>                    
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { toRefs, toRef } from 'vue'
import ContactIconComponent from './ContactIcon.vue'
export default {
    components:{
        ContactIconComponent
    },
    props:{
        
    },
    setup(props, {attrs, slots, emit, expose}){
        return{

        }
    },
    data(){
        return{

        }
    }
}
</script>
<style>
#social-media{
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
}
#social-media-flex{
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
#social-media-center{
    background-color: var(--branco-claro);
    padding-right: 15px;
    padding: 10px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    transition: 200ms;
}
#social-media-center:hover{
    padding-left: 20px;
    padding-right: 20px;
}
</style>