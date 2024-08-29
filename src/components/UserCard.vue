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

<!-- <style scoped>
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
</style> -->

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

