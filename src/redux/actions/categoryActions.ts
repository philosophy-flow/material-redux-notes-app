import { SET_CATEGORY } from "./constants";

export function setCategory(category: string) {
  return {
    type: SET_CATEGORY,
    category,
  };
}
