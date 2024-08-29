<template>
  <div class="user-list-view-container">
    <h1 class="user-list-title">User List</h1>
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
  /* Container for the User List View */
  .user-list-view-container {
    max-width: 900px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f5f8fa;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  /* Title styling */
  .user-list-title {
    font-size: 32px;
    color: #333;
    text-align: center;
    margin-bottom: 30px;
    font-weight: bold;
    letter-spacing: 1px;
    position: relative;
  }
  
  /* Adding a decorative underline */
  .user-list-title::after {
    content: '';
    display: block;
    width: 80px;
    height: 4px;
    background-color: #4CAF50;
    margin: 10px auto 0;
    border-radius: 2px;
  }
  
  /* Additional Styles if Needed */
  </style>
  