import { ADD_TODO, REMOVE_TODO } from "../actions";

export interface IListItem {
  id: number;
  category: string;
  title: string;
  content: string;
}

interface IAction {
  type: string;
  id: number;
  category: string;
  content: string;
  title: string;
}

export default function todoReducer(
  state: IListItem[] = [],
  action: IAction
): IListItem[] {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: Math.random() * 1000,
          category: action.category,
          title: action.title,
          content: action.content,
        },
      ];
    case REMOVE_TODO:
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
}
