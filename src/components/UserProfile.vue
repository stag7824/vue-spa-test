<template>
  <div class="profile-container" v-if="user">
    <h2 class="profile-name">{{ user.name }}</h2>
    <img 
      :src="user.avatar" 
      alt="User avatar" 
      :class="['profile-avatar', { 'active-status': user.status === 'active' }]"
    />
    <div class="profile-info">
      <p><strong>Email:</strong> {{ user.email }}</p>
      <p><strong>Role:</strong> {{ user.role }}</p>
      <p><strong>Status:</strong> {{ user.status }}</p>
    </div>
  </div>
  <div class="loading-container" v-else>
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
/* Container styling */
.profile-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Name styling */
.profile-name {
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
}

/* Avatar styling */
.profile-avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
  border: 4px solid transparent; /* Default border to transparent */
}

/* Conditional class for active status */
.active-status {
  border-color: #4CAF50; /* Green border for active users */
}

/* Info styling */
.profile-info p {
  margin: 10px 0;
  font-size: 16px;
  color: #555;
}

/* Loading container styling */
.loading-container {
  text-align: center;
  padding: 50px;
  font-size: 18px;
  color: #999;
}
</style>

