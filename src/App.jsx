import React from "react";
import "bulma/css/bulma.min.css";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetail from "./components/ItemDetailContainer/ItemDetail";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar />
      <Switch>
          <Route exact path="/" component={ItemListContainer} />
          <Route path="/item/:id" component={ItemDetailContainer} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;