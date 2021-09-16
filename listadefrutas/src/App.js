import "./App.css";
import Fruits from "./components/Fruits";
import { useState } from "react";

function App() {
  const [fruits, setFruits] = useState([
    { name: "banana", color: "yellow", price: 2 },
    { name: "cherry", color: "red", price: 3 },
    { name: "strawberry", color: "red", price: 4 },
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <Fruits fruits={fruits} setFruits={setFruits}>
     
        </Fruits>
      </header>
    </div>
  );
}

export default App;

