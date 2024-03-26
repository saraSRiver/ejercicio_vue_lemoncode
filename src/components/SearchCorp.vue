    <template>
        <input class="busqueda" type="text">
  </template>
  
  <script lang="ts">
    import { defineComponent, PropType } from "vue";
    //import { corporationService } from '../services/corporationService';
    import { Member } from '../types/Member';
    import { Corporation } from '../types/Corporation';
    import ButtonCorp from './ButtonCorp.vue';
  

    export default defineComponent({
      data(){
        return{
          corps: [] as Corporation[]
        };
      }, 
      async created() {
        //this.corps= await fetch(`https://api.github.com/orgs/${corps}/members`).then((c) => c.json);
      },
    });
  </script>
  
<style scoped>
  .busqueda{
    margin: 10px 15px 30px 0;
  }
</style>