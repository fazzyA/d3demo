import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import BarApp from "./components/BarChart/BarApp";
import DonutChart from "./components/Donut/DonutChart";
import Line from "./components/LineChart/Line";
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
            <li>
              <Link to="/donut">Donut Chart</Link>
            </li>
            <li>
              <Link to="/line">Line Chart</Link>
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
          <Route path="/donut">
            <DonutChart />
          </Route>
          <Route path="/line">
            <Line />
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