<template>
  <div class="profile-view-container">
    <div class="header">
      <h1 class="profile-title">User Profile</h1>
      <!-- Back button to navigate to User List -->
      <button @click="goBack" class="back-button">← Back to User List</button>
    </div>
    <!-- UserProfile component displays the detailed profile of a user -->
    <UserProfile :id="userId" />
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import UserProfile from '../components/UserProfile.vue';
import { useRoute, useRouter } from 'vue-router';

export default {
  name: 'UserProfileView',
  components: {
    UserProfile,
  },
  setup() {
    const route = useRoute();
    const router = useRouter(); // Use useRouter to get router instance
    const userId = computed(() => parseInt(route.params.id, 10));

    // Function to navigate back to the User List view
    const goBack = () => {
      router.push('/');
    };

    return {
      userId,
      goBack, // Expose goBack function to the template
    };
  },
};
</script>

<style scoped>
/* Container for the entire view */
.profile-view-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  background-color: #f4f7f6;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* Header styling */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

/* Title styling */
.profile-title {
  font-size: 28px;
  font-weight: bold;
  color: #333;
}

/* Back button styling */
.back-button {
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #4CAF50;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.back-button:hover {
  background-color: #45a049;
  transform: translateY(-2px);
}

.back-button:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(76, 175, 80, 0.4);
}
</style>
