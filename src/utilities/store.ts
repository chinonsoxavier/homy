import { IuserInterface } from './interface';
// store.js
import { defineStore } from 'pinia';


export const useUserStore = defineStore("user", {
  state: () => ({
    user: null,
    isLoading:false
  }),
  actions: {
    startUserLogin() {
      this.isLoading = true;
    },
    handleUserLogin(user:IuserInterface) {
      this.user = user;
    },
    endUserLogin() {
            this.isLoading = false
    },
  }
})

export const useMainStore = defineStore("main", {
  state: () => ({
    menuOpen: false,
    agentSidebar: false,
    agentSidebarOpen: false,
  }),
  actions: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    toggleagentSideMenu() {
      this.agentSidebarOpen = !this.agentSidebarOpen;
    },
    setAgentSide() {
      this.agentSidebar = !this.agentSidebar;
    }
  },
});

