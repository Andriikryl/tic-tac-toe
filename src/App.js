import "./App.css";
import Cell from "./components/Cell";
import { useState } from "react";

function App() {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [go, setGo] = useState("circle");
  const [winningMessage, setWinningMessage] = useState(null);

  return (
    <div className="App">
      <div className="gameboard">
        {cells.map((cell, index) => (
          <Cell key={index} id={index} cell={cell} />
        ))}
      </div>
      <p></p>
    </div>
  );
}

export default App;