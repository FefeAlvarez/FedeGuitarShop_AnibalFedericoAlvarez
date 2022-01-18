import "./App.css";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";

export const App = () => {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Guitarras a la venta" />
    </div>
  );
};
