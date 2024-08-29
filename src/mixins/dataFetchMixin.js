import { fetchUsers } from '../services/ApiService';

export default {
  methods: {
    fetchUsers() {
      fetchUsers().then(users => this.users = users);
    }
  }
};
