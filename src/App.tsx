import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavigationDrawer from "./components/NavigationDrawer";
import Notes from "./pages/Notes";
import AddNote from "./pages/AddNote";

function App() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <NavigationDrawer />
        <main style={{ flexGrow: 1 }}>
          <Switch>
            <Route path="/" exact>
              <Notes />
            </Route>
            <Route path="/add">
              <AddNote />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
