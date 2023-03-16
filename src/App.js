import "./App.css";
import Cell from "./components/Cell";
import { useState } from "react";

function App() {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [go, setGo] = useState("circle");
  const [winningMessage, setWinningMessage] = useState(null);
  const message = "it is now " + go + "'s go";

  return (
    <div className="App">
      <div className="gameboard">
        {cells.map((cell, index) => (
          <Cell
            key={index}
            id={index}
            cell={cell}
            setCells={setCells}
            go={go}
          />
        ))}
      </div>
      <p>{message}</p>
    </div>
  );
}

export default App;
