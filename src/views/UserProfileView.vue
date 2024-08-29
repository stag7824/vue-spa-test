<template>
  <div>
    <h1>User Profile</h1>
    <!-- Back button to navigate to User List -->
    <button @click="goBack" class="back-button">Back to User List</button>
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
/* Add some styling for the back button */
.back-button {
  margin-bottom: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
</style>
