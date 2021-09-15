import { ADD_TODO, REMOVE_TODO } from "./constants";

export function addTodo(category: string, title: string, content: string) {
  return {
    type: ADD_TODO,
    category,
    title,
    content,
  };
}

export function removeTodo(id: number) {
  return {
    type: REMOVE_TODO,
    id,
  };
}
