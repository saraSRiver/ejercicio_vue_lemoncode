<template>
  <div class="home">
    <div>
      <p>Lista de miembros</p>
    </div>
    <SearchCorp></SearchCorp>
    <ButtonCorp></ButtonCorp>
    <MemberList />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import  MemberList from './MemberList.vue';
  import SearchCorp from "./SearchCorp.vue";
  import ButtonCorp from "./ButtonCorp.vue";

  export default defineComponent({
    name: "HomePage", 
    components: {
      MemberList,
      //SearchCorp, 
      ButtonCorp
    }
    
  });
</script>

<style scoped>
  .home{
    display: block;
    width: 100%;
    
  }

</style>