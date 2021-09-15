import { useDispatch } from "react-redux";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { makeStyles } from "@material-ui/core";

import { removeTodo } from "../redux";
import { IListItem } from "../redux";

export default function Note({ item }: { item: IListItem }) {
  const dispatch = useDispatch();
  const handleDelete = (id: number) => {
    dispatch(removeTodo(id));
  };

  // custom styles
  const useStyles = makeStyles({
    card: { width: 300 },
    content: { wordBreak: "break-word" },
    avatar: {
      backgroundColor: (item: IListItem) => {
        switch (item.category) {
          case "Home":
            return "#4dabf5";
          case "Work":
            return "#f6685e";
          case "Finance":
            return "#6fbf73";
        }
      },
    },
  });
  const classes = useStyles(item);

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="category" className={classes.avatar}>
            {item.category.slice(0, 1)}
          </Avatar>
        }
        title={item.title}
        subheader={item.addedOn}
        action={
          <IconButton aria-label="delete" onClick={() => handleDelete(item.id)}>
            <HighlightOffIcon />
          </IconButton>
        }
      />
      <CardContent>
        <Typography className={classes.content} variant="body2" component="p">
          {item.content}
        </Typography>
      </CardContent>
    </Card>
  );
}
