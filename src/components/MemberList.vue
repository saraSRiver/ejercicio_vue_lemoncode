<template>
    <div class="list-user-list-container">
      <span className="list-header">Avatar</span>
      <span className="list-header">Id</span>
      <span className="list-header">Nombre</span>
      <div class="list-user" v-for="member in list" :key="member.id">
 
          <div class="user-container">
            <img :src="member.avatar_url" alt="">
          </div>
          <div class="user-container">{{member.id}}</div>
          <div class="user-container">{{member.login}}</div>
  
      </div>
    </div>
  </template>
  
  <script lang="ts">
    import { defineComponent, onMounted, ref } from "vue";
    import { memberService } from '../services/memberService';
    import { Member } from '../types/Member';

    
export default defineComponent({
  props: {
    corps: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const list = ref<Member[]>([]);

    onMounted(async () => {
      try {
        list.value = await memberService.get(props.corps);
      } catch (error) {
        console.error('Error fetching member list:', error);
      } 
    });

    return { list };
  }
    })
      
  </script>
  
<style scoped>
  .list-user-list-container {
    display: grid;
    grid-template-columns: 80px 1fr 3fr;
    grid-gap: 10px 5px;
    margin-bottom: 40px;
  }

  .list-header {
  background-color: #dbc933;
  color: white;
  font-weight: bold;
  }

  .user-container > img {
    width: 80px;
  }
  
  .list-user{
      grid-column: 1 / -1;
      display: grid;
      grid-template-columns: subgrid;
      grid-gap: 10px 5px;
  }

  .user-container{
    margin-bottom: 40px;
    font-size: small;
  }
</style>