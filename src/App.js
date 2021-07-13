import './App.css';
import CardContainer from "./components/card-container";
import { HashRouter, Switch, Route } from "react-router-dom";
import { initChron } from "./api/chronicler";
import { useEffect } from "react";

function App() {
  useEffect(() => {initChron()}, []);
  return (
    <HashRouter>
      <div className="App">
        <Switch>
          <Route path="/:hash" component={CardContainer} />
          <Route path="/"><CardContainer/></Route>
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
