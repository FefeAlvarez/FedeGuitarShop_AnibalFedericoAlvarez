import './App.css';
import { NavBar } from './components/navBar/navBar';

export const App = () => {

  const welcome =()=> alert ("Welcome to the store")
  
  return (

    <div className="App">
      <NavBar />
      <h1>Fede's Guitar Shop</h1>
      <button onClick={welcome} >click</button>    
    </div>
  );
}


