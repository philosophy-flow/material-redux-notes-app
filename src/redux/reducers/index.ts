import { combineReducers } from "redux";
import todoReducer from "./todoReducer";
import { categoryReducer } from "./categoryReducer";

const rootReducer = combineReducers({
  list: todoReducer,
  selectedCategory: categoryReducer,
});
export default rootReducer;

// Type exports
export type { IListItem } from "./todoReducer";
