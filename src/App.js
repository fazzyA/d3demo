import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import BarApp from "./components/BarChart/BarApp";
import PieChart from "./components/Pie/PieChart";
import RadialApp from "./components/RadialBurst/RadialApp";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/barchart">Bar Chart</Link>
            </li>
            <li>
              <Link to="/radial">Radial Chart</Link>
            </li>
            <li>
              <Link to="/pie">Pie Chart</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/barchart">
            <BarApp/>
          </Route>
          <Route path="/radial">
            <RadialApp />
          </Route>
          <Route path="/pie">
            <PieChart />
          </Route>
          <Route path="/">
            <BarApp />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
// function Home() {
//     return <h2>Home</h2>;
//   }