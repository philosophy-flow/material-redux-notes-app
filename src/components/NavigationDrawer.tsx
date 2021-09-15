import { Link } from "react-router-dom";

import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core";

import HomeIcon from "@material-ui/icons/Home";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => {
  return {
    drawerPaper: {
      width: "inherit",
    },
    link: {
      textDecoration: "none",
      color: "inherit",
    },
  };
});

export default function NavigationDrawer() {
  const classes = useStyles();

  return (
    <Drawer
      style={{ width: 175 }}
      variant="permanent"
      anchor="left"
      classes={{ paper: classes.drawerPaper }}
    >
      <List>
        {[
          { text: "Home", path: "/" },
          { text: "Add Note", path: "/add" },
        ].map((item, index) => (
          <Link to={item.path} className={classes.link} key={item.text}>
            <ListItem button>
              <ListItemIcon>
                {item.text === "Home" ? <HomeIcon /> : <AddIcon />}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          </Link>
        ))}
      </List>
    </Drawer>
  );
}
