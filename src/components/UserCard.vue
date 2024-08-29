<template>
    <div class="user-card">
      <img :src="user.avatar" alt="User Avatar" v-lazy="user.avatar"/>
      <h3>{{ user.name }}</h3>
      <p>{{ user.email }}</p>
      <p>{{ user.role }}</p>
      <p>{{ user.status }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'UserCard',
    props: {
      user: {
        type: Object,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  .user-card {
    border: 1px solid #ccc;
    padding: 16px;
    border-radius: 8px;
    text-align: center;
  }
  </style>
  