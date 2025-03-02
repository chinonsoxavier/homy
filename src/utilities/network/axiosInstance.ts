import axios from "axios";
import { baseUrl } from "./baseUrl";
import { computed } from "vue";
import {jwtDecode} from "jwt-decode";
import { useUserStore } from "../store";

const axiosInstance = axios.create({
    baseURL: baseUrl,
    timeout:5000,

});

axiosInstance.interceptors.request.use(async(config) => {
    const userStore = useUserStore();
    const accessToken = computed(() => userStore.acessToken).value;
    const token = localStorage.getItem("access");
    let currentDate = new Date();
    const decodedToken = jwtDecode(accessToken);
//   const accessToken = localStorage.getItem("access");
    //   await userStore.initializeUser(accessToken);
    console.log(accessToken);
    console.log(decodedToken);
    if (decodedToken.exp * 1000 < currentDate.getTime()) {
        try {
            console.log("expired");
            const newTokens = await axiosInstance.put(`${baseUrl}auth/refresh-token`, {
                "token": `Bearer ${token}`
            });
            const newAccessToken = newTokens.data.accessToken;
            const newRefreshToken = newTokens.data.refreshToken;

            console.log(newAccessToken,newRefreshToken)
        } catch (error) {
            console.log(error);
        }

    }

    if (token) {
        config.headers["token"] = `Bearer ${token}`;
    };
    return config;
}, (error) => {
    return Promise.reject(error)
});


export default axiosInstance;