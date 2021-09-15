import { SET_CATEGORY } from "../actions";

export function categoryReducer(
  state = "",
  action: { type: string; category: string }
) {
  switch (action.type) {
    case SET_CATEGORY: {
      return action.category;
    }
    default:
      return state;
  }
}
