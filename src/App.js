import "./App.css";
import Cell from "./components/Cell";
import { useState, useEffect } from "react";

function App() {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [go, setGo] = useState("circle");
  const [winningMessage, setWinningMessage] = useState(null);
  const message = "it is now " + go + "'s go";

  const checkScore = () => {
    const winningMessage = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    winningMessage.forEach((array) => {
      let ceicleWins = array.every((cell) => cells[cell] === "circle");

      if (ceicleWins) {
        setWinningMessage("Circle wins!");
        return;
      }
    });

    winningMessage.forEach((array) => {
      let crossWins = array.every((cell) => cells[cell] === "cross");

      if (crossWins) {
        setWinningMessage("Cross wins!");
        return;
      }
    });
  };

  useEffect(() => {
    checkScore();
  }, [cells]);

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
            setGo={setGo}
            cells={cells}
          />
        ))}
      </div>
      <p>{winningMessage || message}</p>
    </div>
  );
}

export default App;
