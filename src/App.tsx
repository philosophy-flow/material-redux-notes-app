import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { makeStyles } from "@material-ui/core";
import Container from "@material-ui/core/Container";

import NavigationDrawer from "./components/NavigationDrawer";
import Notes from "./pages/Notes";
import AddNote from "./pages/AddNote";

function App() {
  const useStyles = makeStyles({
    root: { display: "flex" },
    container: {
      paddingTop: "1rem",
      minHeight: "100vh",
      backgroundColor: "#fafafa",
      flexGrow: 1,
    },
  });
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.root}>
        <NavigationDrawer />
        <Container className={classes.container} component="main">
          <Switch>
            <Route path="/" exact>
              <Notes />
            </Route>
            <Route path="/add">
              <AddNote />
            </Route>
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
