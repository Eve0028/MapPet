import { defineStore } from 'pinia';
import AuthService from '../services/auth.service';

const user = JSON.parse(localStorage.getItem('user'));

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    // loggedIn: loggedInSt,
    user: user
  }),

  actions: {
    async login(user) {
      return AuthService.login(user).then(
        user => {
          // this.loggedIn = true;
          this.user = user;
          return Promise.resolve(user);
        },
        error => {
          // this.loggedIn = false;
          this.user = null;
          return Promise.reject(error);
        }
      );
    },
    logout() {
      AuthService.logout();
      // this.loggedIn = false;
      this.user = null;
    },
    register(user) {
      return AuthService.register(user).then(
        response => {
          // this.loggedIn = false;
          return Promise.resolve(response.data);
        },
        error => {
          // this.loggedIn = false;
          return Promise.reject(error);
        }
      );
    }
  }
});
