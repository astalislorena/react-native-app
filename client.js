import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "192.168.68.116:8080/",
});
console.log(axiosClient);
