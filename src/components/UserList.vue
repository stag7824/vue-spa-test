<template>
  <div>
    <div class="filter-bar">
      <input v-model="searchQuery" placeholder="Search by query (e.g., role:admin status:active)" />
      <select v-model="selectedRole">
        <option value="">All Roles</option>
        <option value="admin">Admin</option>
        <option value="user">User</option>
      </select>
      <select v-model="selectedStatus">
        <option value="">All Statuses</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
    </div>
    <div class="user-list">
      <!-- Make each UserCard clickable to navigate to the user's profile -->
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
/* Add cursor pointer to indicate clickable items */
.user-card-clickable {
  cursor: pointer;
}
</style>
