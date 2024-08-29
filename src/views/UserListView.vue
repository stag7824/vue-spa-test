<template>
    <div>
      <h1>User List</h1>
      <!-- UserList component displays the list of users with filters -->
      <UserList />
    </div>
  </template>
  
  <script>
  import UserList from '../components/UserList.vue';
  
  export default {
    name: 'UserListView',
    components: {
      UserList,
    },
  };
  </script>
  
  <style scoped>
  /* You can add specific styles for this view if needed */
  h1 {
    margin-bottom: 20px;
    text-align: center;
  }
  </style>
  