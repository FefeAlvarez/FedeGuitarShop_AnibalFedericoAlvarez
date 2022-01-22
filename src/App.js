import "./App.css";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";

export const App = () => {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Item List Container" />
      <ItemDetailContainer />
    </div>
  );
};
