import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core";

import NoteIcon from "@material-ui/icons/Note";
import HomeIcon from "@material-ui/icons/Home";
import AddIcon from "@material-ui/icons/Add";
import WorkIcon from "@material-ui/icons/Work";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";

import { setCategory } from "../redux/actions";

export default function NavigationDrawer() {
  const dispatch = useDispatch();
  const useStyles = makeStyles((theme) => {
    return {
      drawer: {
        paddingTop: 64,
      },
      drawerPaper: {
        width: "inherit",
        paddingTop: 64,
      },
      link: {
        textDecoration: "none",
        color: "inherit",
      },
    };
  });
  const classes = useStyles();

  return (
    <Drawer
      style={{ width: 175 }}
      variant="permanent"
      anchor="left"
      classes={{ paper: classes.drawerPaper }}
    >
      <Divider />
      <List>
        {[
          { text: "All Notes", path: "/", icon: <NoteIcon /> },
          { text: "Add Note", path: "/add", icon: <AddIcon /> },
        ].map((item) => (
          <Link to={item.path} className={classes.link} key={item.text}>
            <ListItem button onClick={() => dispatch(setCategory(""))}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        {[
          { text: "Home", path: "/home", icon: <HomeIcon /> },
          { text: "Work", path: "/work", icon: <WorkIcon /> },
          {
            text: "Finance",
            path: "/finance",
            icon: <AttachMoneyIcon />,
          },
        ].map((item) => (
          <ListItem
            button
            onClick={() => dispatch(setCategory(item.text))}
            key={item.text}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
