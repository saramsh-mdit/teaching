import axios from "axios";

export const registerAPI = (data: any) =>
  axios.post("https://jsonplaceholder.typicode.com", {
    data,
  });
