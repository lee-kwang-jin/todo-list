import { get, post } from "@api/module"

export function getTodoList(params) {
  return get("/todo/list", params);
};

export function saveTodo(params) {
  return post("todo/save", params);
};
