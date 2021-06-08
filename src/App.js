import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { DepartmentUpsert } from "./components/DepartmentUpsert";
import { DepartmentList } from "./components/DepartmentList";
import { Nav, Navbar } from "react-bootstrap";
import { AppNavBar } from "./common/AppNavBar";

function App() {
  return (
    <Router>
      <AppNavBar />

      <Switch>
        <Route path="/create-department">
          <DepartmentUpsert />
        </Route>

        <Route path="/list-department">
          <DepartmentList />
        </Route>

        <Route exact path="/">
          <DepartmentList />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;