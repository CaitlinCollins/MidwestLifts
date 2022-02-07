import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from './components/Home/Home';
import Lifts from './components/Lifts/Lifts';
import './App.scss';

function App() {
  return (
    <div>
      <Header/>
      <Router>
        <Switch>
          <Route exact path={["/", "/home"]}>
            <Home/>
          </Route>
          <Route exact path="/lifts">
            <Lifts/>
          </Route>
        </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
