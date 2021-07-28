import React, { createContext } from "react";
import { CartContext } from "./context/CartContext";
import "bulma/css/bulma.min.css";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar />
      <Switch>
          <Route exact path={["/", "/category/:id"]} component={ItemListContainer} />
          <Route exact path="/item/:id" component={ItemDetailContainer} />
          <Route exact path="/cart" component={Cart} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;