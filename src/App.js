import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/about/1">1</Link>
          </li>
          <li>
            <Link to="/about/2">2</Link>
          </li>
          <li>
            <Link to="/about/3">3</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/about/:id">
          <About />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
