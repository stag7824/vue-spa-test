<template>
  <div class="user-list-container">
    <div class="filter-bar">
      <!-- Search Input -->
      <input
        v-model="searchQuery"
        class="search-input"
        placeholder="Search by query (e.g., role:admin status:active)"
      />
      
      <!-- Role Dropdown -->
      <select v-model="selectedRole" class="dropdown">
        <option value="">All Roles</option>
        <option value="admin">Admin</option>
        <option value="user">User</option>
      </select>
      
      <!-- Status Dropdown -->
      <select v-model="selectedStatus" class="dropdown">
        <option value="">All Statuses</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
    </div>

    <!-- User Cards -->
    <div class="user-list">
      <UserCard
        v-for="user in filteredUsers"
        :key="user.id"
        :user="user"
        @click="goToUserProfile(user.id)"
        class="user-card-clickable"
      />
    </div>
  </div>
</template>

<script>
import UserCard from './UserCard.vue';
import filterMixin from '../mixins/filterMixin';
import dataFetchMixin from '../mixins/dataFetchMixin';
import { useRouter } from 'vue-router';

export default {
  name: 'UserList',
  components: { UserCard },
  mixins: [filterMixin, dataFetchMixin],
  setup() {
    const router = useRouter(); // Use useRouter to get router instance

    const goToUserProfile = (id) => {
      router.push(`/user/${id}`); // Navigate to UserProfileView with the selected user's ID
    };

    return {
      goToUserProfile, // Expose goToUserProfile method to the template
    };
  },
  data() {
    return {
      users: [],
      searchQuery: '',
      selectedRole: '',
      selectedStatus: '',
    };
  },
  computed: {
    filteredUsers() {
      return this.applyFilters(this.users, this.searchQuery, this.selectedRole, this.selectedStatus);
    }
  },
  created() {
    this.fetchUsers();
  }
};
</script>


<style scoped>
/* Container styling */
.user-list-container {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

/* Flexbox for layout */
.filter-bar {
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

/* Improved Search Input Styling */
.search-input {
  flex: 1;
  padding: 10px;
  border: 2px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  transition: border-color 0.3s ease;
}

.search-input:focus {
  border-color: #4CAF50;
  outline: none;
}

/* Dropdown Styling */
.dropdown {
  padding: 10px;
  border: 2px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
  font-size: 16px;
  transition: border-color 0.3s ease, background-color 0.3s ease;
}

.dropdown:hover, .dropdown:focus {
  border-color: #4CAF50;
  background-color: #e0f7e0;
  outline: none;
}

/* User List Styling */
.user-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

/* Clickable User Card */
.user-card-clickable {
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.user-card-clickable:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}
</style>