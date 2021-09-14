import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Notes from "./pages/Notes";
import AddNote from "./pages/AddNote";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Notes />
          </Route>
          <Route path="/add">
            <AddNote />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
