<template>
  <button @click="buscarMiembros">Buscar miembros</button>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance } from "vue";
import { memberService } from '../services/memberService';

export default defineComponent({
  setup() {
    const buscarMiembros = () => {
      console.log("el boton funciona")
      // Emitir el evento 'buscar-miembros' con el valor actual de 'corps'
      // Accedemos a la instancia del componente con 'getCurrentInstance()'
      // y luego llamamos a 'emit' en la instancia
      const instance = getCurrentInstance();
      if (instance) {
        instance.emit('buscar-miembros');
      }
    };

    return { buscarMiembros };
  },
});
</script>

<style scoped>
  button{
    margin: 10px 0 30px 0;
    background-color: #dbc933;
    font-weight: bold;
  }
</style>