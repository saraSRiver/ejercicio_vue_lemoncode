<template>
  <div>
    <SearchCorp @buscar-miembros="buscarMiembros" />
    <ButtonBuscar @buscar-miembros="buscarMiembros" />
    <MemberList :corps="corps" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import SearchCorp from "./SearchCorp.vue";
import ButtonBuscar from "./ButtonCorp.vue";
import MemberList from "./MemberList.vue";
import { memberService } from '../services/memberService';

export default defineComponent({
  components: {
    SearchCorp,
    ButtonBuscar,
    MemberList
  },
  data() {
    return {
      corps: "lemoncode"
    };
  },
  methods: {
    async buscarMiembros() {
      try {
        const members = await memberService.get(this.corps);
        // Aquí puedes hacer algo con los miembros obtenidos
      } catch (error) {
        console.error('Error al buscar miembros:', error);
      }
    }
  }
});
</script>

<style scoped>
  .home{
    display: block;
    width: 100%;
  }

</style>
