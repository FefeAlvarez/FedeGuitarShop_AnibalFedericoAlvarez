import "./App.css";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";

export const App = () => {
  return (
    <div className="App">
      <NavBar />
      <h1>Fede's Guitar Shop</h1>
      <ItemListContainer greeting="Guitarras a la venta" />
    </div>
  );
};
