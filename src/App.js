import './App.css';
import CardContainer from "./components/card-container";
import { HashRouter, Switch, Route } from "react-router-dom";
import { initChron } from "./api/chronicler";
import { useEffect } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'

const App = () => {
  useEffect(() => {initChron()}, []);
  return (
    <HashRouter>
      <div className="App">
        <Switch>
          <Route path="/:hash" component={CardContainer} />
          <Route path="/"><CardContainer/></Route>
        </Switch>
        <ToastContainer />
      </div>
    </HashRouter>
  );
}

export default App;
