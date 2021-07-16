import React from "react";
import "bulma/css/bulma.min.css";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetail from "./components/ItemDetailContainer/ItemDetail";


function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
    </div>
  );
}

export default App;