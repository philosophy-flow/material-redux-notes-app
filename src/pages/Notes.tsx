import { useSelector } from "react-redux";
import { RootState } from "../redux";

export default function Notes() {
  const list = useSelector((state: RootState) => state.list);

  const renderList = list.map((item) => (
    <li key={item.id}>
      <h3>{item.title}</h3>
      <h5>{item.category}</h5>
      <p>{item.content}</p>
    </li>
  ));

  return (
    <>
      <h1>Things to Get Done</h1>
      {list.length ? <ul>{renderList}</ul> : <p>No items to display</p>}
    </>
  );
}
