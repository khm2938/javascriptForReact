import { api } from "./api";

// 목록
export function getBoards() {
  return api.get("/api/boards");
}

// 등록
export function createBoard(data) {
  return api.post("/api/boards", data);
}

// 삭제
export function deleteBoard(id) {
  return api.delete(`/api/boards/${id}`);
}

// 수정
export function updateBoard(id, data) {
  return api.put(`/api/boards/${id}`, data);
}