import { fetchUsers, fetchUserById } from '../../services/ApiService';
// import axios from 'axios';
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
    // const response = axios.get("https://randomuser.me/api/?results=10")
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
