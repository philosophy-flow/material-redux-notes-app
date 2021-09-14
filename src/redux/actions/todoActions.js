import { ADD_TODO, REMOVE_TODO } from "./constants";

export function addTodo(category, title, content) {
  return {
    type: ADD_TODO,
    category,
    title,
    content,
  };
}

export function removeTodo(id) {
  return {
    type: REMOVE_TODO,
    id,
  };
}
