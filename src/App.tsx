import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { makeStyles } from "@material-ui/core";
import Container from "@material-ui/core/Container";

import Header from "./components/Header";
import NavigationDrawer from "./components/NavigationDrawer";
import Notes from "./pages/Notes";
import AddNote from "./pages/AddNote";

function App() {
  const useStyles = makeStyles({
    root: { display: "flex", backgroundColor: "#fafafa" },
    container: {
      paddingTop: 64,
      minHeight: "100vh",
      flexGrow: 1,
    },
    appBar: {
      width: "calc(100% - 175px)",
      minHeight: 64,
    },
  });
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.root}>
        <Header />
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
