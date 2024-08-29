<template>
  <div v-if="user">
    <h2>{{ user.name }}</h2>
    <p><strong>Email:</strong> {{ user.email }}</p>
    <p><strong>Role:</strong> {{ user.role }}</p>
    <p><strong>Status:</strong> {{ user.status }}</p>
  </div>
  <div v-else>
    <p>Loading user data...</p>
  </div>
</template>

<script>
import { fetchUserById } from '../services/ApiService';

export default {
  name: 'UserProfile',
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      user: null,  // Start with null to indicate data hasn't been fetched yet
    };
  },
  async created() {
    try {
      // Fetch user by ID and handle the case where the user might not exist
      const users = await fetchUserById(this.id);
      this.user = users.find(user => user.id === this.id) || null;
    } catch (error) {
      console.error('Error fetching user:', error);
      this.user = null; // Set to null if there's an error fetching user
    }
  }
};
</script>

<style scoped>
/* Add styling here if needed */
</style>
