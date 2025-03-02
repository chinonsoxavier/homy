export interface IToast {
  type: "success" | "info" | "warning" | "error";
  description: string;
  duration: number;
  title: string;
  showClose: boolean;
}
