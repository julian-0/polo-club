import "./App.css";
import { Route, Switch } from "wouter"
import ListOfPlayers from "./components/ListOfPlayers";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          component={Home}
          path="/" />
        <Route
          component={ListOfPlayers}
          path="/players" />
      </Switch>

    </div>
  );
}

export default App;
