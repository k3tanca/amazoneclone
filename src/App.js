import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
