// import { IuserInterface } from './interface';
// store.js
import { defineStore } from "pinia";
import { baseUrl } from "./network/baseUrl";
// import axiosInstance from "./network/axiosInstance";
// import { useToastStore } from "../components/HmToast/HmToastStore";
import { IuserInterface } from "./interface";
import axiosInstance from "./network/axiosInstance";
// const toastStore = useToastStore();

export const useUserStore = defineStore("user", {
  state: () => ({
    user: {} as IuserInterface,
    isLoading: false,
    acessToken: localStorage.getItem("access") || null,
    refreshToken: localStorage.getItem("refresh") || null,
  }),
  actions: {
    async GetUser(token: String) {
      try {
        const user = await axiosInstance.get(`${baseUrl}user/get-user`, {
          headers: {
            token: `Bearer ${token}`,
          },
        });
        this.isLoading = false;
        return user.data;
      } catch (error) {
        console.log(error);
        this.isLoading = false;
        return error.response;
      }
    },

    async initializeUser(token: String) {
      const currentUser = await this.GetUser(token);
      this.user = currentUser;
      console.log(currentUser);
      console.log(this.user);
    },
    logoutUser() {
      this.user = null;
    },
  },
});

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
    },
  },
});
