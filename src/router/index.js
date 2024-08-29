import { createRouter, createWebHistory } from 'vue-router';
import UserListView from '../views/UserListView.vue';
import UserProfileView from '../views/UserProfileView.vue';

const routes = [
  { path: '/', name: 'UserList', component: UserListView },
  { path: '/user/:id', name: 'UserProfile', component: UserProfileView, props: true }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
