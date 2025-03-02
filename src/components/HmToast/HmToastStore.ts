import { defineStore } from "pinia";
import { IToast } from "./HmToastInterface";
// import { v4 as uuidv4 } from "uuid";
// import type { IToast } from "@/components/sm-toast/SmToastInterface";

export const useToastStore = defineStore("toast-view-store", {
  state: (): { toastList: Array<IToast> } => ({
    toastList: [],
  }),
  actions: {
    /**
     * This is used to create a default and plane toast
     */
    buildToast(
      type: IToast["type"],
      title: string,
      description: string,
      duration: number,
      showClose: boolean
    ) {
      return {
        type,
        description,
        duration,
        title,
        showClose,
      };
    },
    setToast(toast: IToast) {
      this.toastList = [...this.toastList, toast];
    },
    // Helper functions below
    warn(
      title: string,
      description: string = "",
      showClose: boolean = true,
      duration: number = 5000
    ) {
      const newToast: IToast = this.buildToast(
        "warning",
        title,
        description,
        duration,
        showClose
      );
      return this.setToast(newToast);
    },
    error(
      title: string,
      description: string = "",
      showClose: boolean = true,
      duration: number = 5000
    ) {
      const newToast: IToast = this.buildToast(
        "error",
        title,
        description,
        duration,
        showClose
      );
      return this.setToast(newToast);
    },
    info(
      title: string,
      description: string = "",
      showClose: boolean = true,
      duration: number = 5000
    ) {
      const newToast: IToast = this.buildToast(
        "info",
        title,
        description,
        duration,
        showClose
      );
      return this.setToast(newToast);
    },
    success(
      title: string,
      description: string = "",
      showClose: boolean = true,
      duration: number = 5000
    ) {
      const newToast: IToast = this.buildToast(
        "success",
        title,
        description,
        duration,
        showClose
      );
      console.log(this.toastList);
      return this.setToast(newToast);
    },
    removeToast(title: IToast["title"]) {
      return (this.toastList = this.toastList.filter(
        (toast) => title !== toast.title
      ));
    },
    clearToastList() {
      return (this.toastList = []);
    },
  },
});
