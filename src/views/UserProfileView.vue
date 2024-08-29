<template>
    <div>
      <h1>User Profile</h1>
      <!-- UserProfile component displays the detailed profile of a user -->
      <UserProfile :id="userId" />
    </div>
  </template>
  
  <script>
  import { ref, computed } from 'vue';
  import UserProfile from '../components/UserProfile.vue';
  import { useRoute } from 'vue-router';
  
  export default {
    name: 'UserProfileView',
    components: {
      UserProfile,
    },
    setup() {
      // Using Vue Router's useRoute to get route parameters
      const route = useRoute();
      const userId = computed(() => parseInt(route.params.id, 10)); // Parse user ID from route params
  
      return {
        userId,
      };
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
  