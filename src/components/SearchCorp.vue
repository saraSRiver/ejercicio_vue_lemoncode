   <template>
         <input v-model="corps" class="busqueda" type="text">
  </template>
  
  <script lang="ts">
    import { defineComponent, PropType, ref  } from "vue";
    import { Member } from '../types/Member';
    import { Corporation } from '../types/Corporation';
    import ButtonCorp from './ButtonCorp.vue';
    import { memberService } from '../services/memberService';


    export default defineComponent({
      setup() {
        const corps = ref("lemoncode");

        const buscarMiembros = async () => {
          try {
            const members = await memberService.get(corps.value);
            // Aquí puedes hacer algo con los miembros, como emitir un evento con los datos
          } catch (error) {
            console.error('Error al buscar miembros:', error);
          }
        };

        return { corps, buscarMiembros };
      },
    })
  </script>
  
<style scoped>
  .busqueda{
    margin: 10px 15px 30px 0;
  }
</style>