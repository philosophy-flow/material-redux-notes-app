import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
import { makeStyles } from "@material-ui/core";

import NoteIcon from "@material-ui/icons/Note";
import HomeIcon from "@material-ui/icons/Home";
import AddIcon from "@material-ui/icons/Add";
import WorkIcon from "@material-ui/icons/Work";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import MenuIcon from "@material-ui/icons/Menu";

import { setCategory } from "../redux/actions";

const drawerWidth = 175;

const useStyles = makeStyles((theme) => {
  return {
    drawer: {
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      [theme.breakpoints.up("sm")]: {
        width: `calc(100% - ${drawerWidth}px)`,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
      paddingTop: 56,
      [theme.breakpoints.up("sm")]: {
        paddingTop: 64,
      },
    },
    link: {
      textDecoration: "none",
      color: "inherit",
    },
  };
});

export default function Navigation() {
  const dispatch = useDispatch();
  const classes = useStyles();

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleClick = (category: string) => {
    dispatch(setCategory(category));
    handleDrawerToggle();
  };

  const drawer = (
    <div>
      <div className={classes.toolbar}>
        <Divider />
        <List>
          {[
            { text: "All Notes", path: "/", icon: <NoteIcon /> },
            { text: "Add Note", path: "/add", icon: <AddIcon /> },
          ].map((item) => (
            <Link to={item.path} className={classes.link} key={item.text}>
              <ListItem button onClick={() => handleClick("")}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
        <List>
          {[
            { text: "Home", path: "/", icon: <HomeIcon /> },
            { text: "Work", path: "/", icon: <WorkIcon /> },
            {
              text: "Finance",
              path: "/",
              icon: <AttachMoneyIcon />,
            },
          ].map((item) => (
            <Link to="/" className={classes.link} key={item.text}>
              <ListItem button onClick={() => handleClick(item.text)}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            </Link>
          ))}
        </List>
      </div>
    </div>
  );

  return (
    <div>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Things to Do</Typography>
        </Toolbar>
      </AppBar>

      <nav className={classes.drawer}>
        <Hidden smUp>
          <Drawer
            variant="temporary"
            anchor="left"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{ paper: classes.drawerPaper }}
            ModalProps={{ keepMounted: true }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown>
          <Drawer
            classes={{ paper: classes.drawerPaper }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}
