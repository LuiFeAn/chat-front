import axios from "axios";

export const aiApi = axios.create({
  baseURL: "http://191.101.71.218:3000",
});
