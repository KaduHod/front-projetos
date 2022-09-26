<template>
    <div class="presentation-header presentation-item">
        <div>
            <h1>Carlos Alberto Ribas Júnior</h1>
            <span>Desenvolvedor de software Back-end</span>
        </div>
    </div>
</template>
<script>

export default {
    props:{

    },
    setup(props, {attrs, slots, expose, emit}){
        return {
            
        }
    },
    components:{

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
</style>