import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASEURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// console.log(process.env.NEXT_PUBLIC_BASEURL)

export default axiosInstance;