<template lang="">
    <div>         
          <!-- Modal -->
          <div class="modal fade" id="modal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            
            <div class="modal-dialog modal-lg">
              
              <div class="modal-content">
                <div class="close-modal-container">
                  <Link :title="'fechar'" data-bs-dismiss="modal"/>
                </div>
                <div class="modal-body" id="modal-content">
                  
                </div>
                
              </div>
            </div>
          </div>
    </div>
</template>
<script>
  import Link from './Link.vue';
export default {
  components:{
    Link
  },
  props:{
    
  },
  setup(props, {attrs, slots, emit, expose}){
    
    return {

    }
  }
}
</script>
<style lang="">
  
</style>