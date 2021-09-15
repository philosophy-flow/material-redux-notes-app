import { ADD_TODO, REMOVE_TODO } from "../actions";

export interface IListItem {
  id: number;
  category: string;
  title: string;
  content: string;
  addedOn: string;
}

interface IAction {
  type: string;
  id: number;
  category: string;
  content: string;
  title: string;
}

const initialState = [
  {
    id: 1,
    category: "Home",
    title: "Test Item #1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dictum quam velit, ut faucibus nunc vehicula at. Cras a aliquam diam. Quisque pretium consequat quam quis sollicitudin. Nunc condimentum at augue et varius. Vivamus sagittis vehicula malesuada. Quisque vulputate neque consequat ullamcorper congue. Integer mi ante, mollis sit amet tempus consectetur, lobortis non tellus. Pellentesque convallis urna mauris, eu pulvinar massa interdum in. Curabitur ut lectus porta, semper ex et, fermentum felis.",
    addedOn: "September 15, 2021",
  },
  {
    id: 2,
    category: "Work",
    title: "Test Item #2",
    content:
      "Aliquam at enim vel neque rutrum venenatis nec vel risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris lacinia ipsum in sem tristique sollicitudin. Proin blandit mollis diam porttitor laoreet. Nunc vitae leo eu turpis rhoncus commodo. In eleifend luctus fermentum. Pellentesque ultricies eros a convallis efficitur.",
    addedOn: "September 15, 2021",
  },
  {
    id: 3,
    category: "Finance",
    title: "Test Item #3",
    content:
      "Cras lorem felis, pretium ac consectetur id, viverra non enim. Etiam scelerisque, turpis vel fermentum congue, turpis erat laoreet orci, at consequat lorem quam id dui. Nulla facilisi. Sed at erat nisl. Curabitur faucibus nunc non venenatis commodo. Donec a dignissim lorem, eget fringilla velit. Sed justo purus, aliquam vel justo ut, mattis accumsan lorem. Curabitur fermentum quis libero sit amet ultricies. Suspendisse id porta massa.",
    addedOn: "September 15, 2021",
  },
];

type dateType = { year: "numeric"; month: "long"; day: "numeric" };
const dateOptions: dateType = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

export default function todoReducer(
  state: IListItem[] = initialState,
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
          addedOn: new Date().toLocaleDateString("en-us", dateOptions),
        },
      ];
    case REMOVE_TODO:
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
}
