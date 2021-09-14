import { combineReducers } from "redux";
import todoReducer from "./todoReducer";

const rootReducer = combineReducers({
  list: todoReducer,
});
export default rootReducer;

// Type exports
export type { IListItem } from "./todoReducer";
