import { api } from "./api";

export function login(username, password) {
  return api.post("/api/auth/login", { username, password });
}

export function logout() {
  return api.post("/api/auth/logout");
}