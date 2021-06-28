import NavBar from "./components/NavBar/NavBar";
import "bulma/css/bulma.min.css";
import "./App.css";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import cono from "./cono.svg";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="E-commerce en camino"/>
      <img src={cono} className="cono-img" alt="cono" />
    </div>
  );
}

export default App;
