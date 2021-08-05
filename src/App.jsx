import React from "react";
import { CartContext } from "./context/CartContext";
import ContextData from "./context/contextData";
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
    <CartContext>
      <ContextData>
      <div className="App">
        <NavBar />
          <Switch>
              <Route exact path={["/", "/category/:categoryName"]} component={ItemListContainer} />
              <Route exact path="/product/:productID" component={ItemDetailContainer} />
              <Route exact path="/cart" component={Cart} />
          </Switch>
      </div>
      </ContextData>
    </CartContext>
    </Router>
  );
}

export default App;