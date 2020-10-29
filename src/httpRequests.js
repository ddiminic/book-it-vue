import axios from "axios";
const api_host = "https://localhost/api/";
import store from "./store";

export function http(request, method, data) {
  const token = store.getters.token;
  const headers = { Authorization: "token:" + token };
  return axios({
    method: method,
    url: request,
    baseURL: api_host,
    data,
    headers
  });
}