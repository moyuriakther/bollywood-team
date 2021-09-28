import { useEffect, useState } from "react";
import "./App.css";
import Actor from "./components/Actors/Actor";
import Cart from "./components/Cart/Cart";
import actor from "./data/data.json";

function App() {
  const [actors, setActors] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    setActors(actor);
  }, []);
  const handleAddUser = actor => {
    const newCart = [...cart, actor];
    setCart(newCart);
 }
  return (
    <div className="App">
      <h2 className="title">Make an bollywood team</h2>
      <div className = "contaner">
        <div className="grid-container">
          {actors.map((actor) => (
            <Actor actor={actor} key={actor.id} handleAddUser={handleAddUser}></Actor>
          ))}
        </div>
        <div>
            <Cart cart={cart} key={cart.id}></Cart>
        </div>
      </div>
    </div>
  );
}

export default App;
