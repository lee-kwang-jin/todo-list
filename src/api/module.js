import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost/",
  timeout: 10000,
  auth: {
    username: 'user2',
    password: 'user2'
  }
});

export function post(uri, params) {
  return instance.post(uri, params);
}

export function get(uri, params) {
  return instance.get(uri, {
    "params": params
  });
}
