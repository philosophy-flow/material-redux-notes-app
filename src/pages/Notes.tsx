import { useSelector } from "react-redux";
import { RootState } from "../redux";
import Masonry from "react-masonry-css";

import Typography from "@material-ui/core/Typography";

import Note from "../components/Note";

export default function Notes() {
  const list = useSelector((state: RootState) => state.list);

  const renderList = list.map((item) => <Note item={item} key={item.id} />);

  const breakpointColumnsObj = {
    default: 3,
    1200: 2,
    850: 1,
  };

  return (
    <>
      <Typography variant="h5" component="h2" style={{ marginBottom: "1rem" }}>
        Things to Get Done
      </Typography>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {list.length ? (
          renderList
        ) : (
          <Typography>No items to display</Typography>
        )}
      </Masonry>
    </>
  );
}
