
// store.js
import { defineStore } from 'pinia';

export const useMainStore = defineStore("main", {
  state: () => ({
    menuOpen: false,
    agentSidebar: false,
    agentSidebarOpen: false,
    user: null,
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
    },
  },
});

