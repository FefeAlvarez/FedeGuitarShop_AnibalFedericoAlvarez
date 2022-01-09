import "./App.css";

import { CartWidget } from "./components/CartWidget/CartWidget";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";

export const App = () => {
  const welcome = () => alert("Welcome to the store");

  return (
    <div className="App">
      <NavBar>
        <CartWidget />
      </NavBar>
      <h1>Fede's Guitar Shop</h1>
      <button onClick={welcome}>click</button>
      <ItemListContainer greeting="Guitarras a la venta" />
    </div>
  );
};
