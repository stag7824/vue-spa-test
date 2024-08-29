import { fetchUsers, fetchUserById } from '../../services/ApiService';

const state = {
  users: [],
  selectedUser: null
};

const mutations = {
  setUsers(state, users) {
    state.users = users;
  },
  setSelectedUser(state, user) {
    state.selectedUser = user;
  }
};

const actions = {
  async loadUsers({ commit }) {
    const users = await fetchUsers();
    commit('setUsers', users);
  },
  async loadUserById({ commit }, id) {
    const user = await fetchUserById(id);
    commit('setSelectedUser', user);
  }
};

export default {
  state,
  mutations,
  actions
};
