<template>
  <div class="user-card">
    <!-- Display user's avatar using the avatar property -->
    <img :src="user.avatar" alt="User Avatar" class="avatar" />
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
  display: flex;
  flex-direction: column;
  align-items: center;
}

.avatar {
  width: 100%;
  max-width: 150px; /* Ensure the avatar does not exceed 150px */
  border-radius: 50%; /* Make the image circular */
  margin-bottom: 16px;
}
</style>
