<template>
    <div class="list-user-list-container">
      <span className="list-header">Avatar</span>
      <span className="list-header">Id</span>
      <span className="list-header">Nombre</span>
      <div class="list-user">
        <div class="user-container" v-for="member in list" :key="member.id">{{member.avatar_url}}</div>
        <div class="user-container" v-for="member in list" :key="member.id">{{member.id}}</div>
        <div class="user-container" v-for="member in list" :key="member.id">{{member.login}}</div>
      </div>
      
    </div>
  </template>
  
  <script lang="ts">
    import { defineComponent } from "vue";
    import { memberService } from '../services/memberService';
    import { Member } from '../types/Member';

    const list = await memberService.get();
  </script>
  
<style scoped>
  .list-user-list-container {
    display: grid;
    grid-template-columns: 80px 1fr 3fr;

    
    grid-template-rows: 20px;
    grid-auto-rows: 80px;
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

  .user-container{
    margin-bottom: 40px;
    font-size: small;
  }
</style>