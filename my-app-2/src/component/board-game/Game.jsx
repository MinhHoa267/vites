import { useState } from "react";
import Board from "./Board";


export default function Game() {
  
    const [history, setHistory] = useState([Array(9).fill(null)]); 
     const [xIsNext, setxIsNext] = useState(true);
    const [currentMove, setCurrentMove] = useState(0);

    const currentSquares = history[currentMove];
    
    function handlePlay(nextSquares){

        setHistory([...history, nextSquares]);
        setxIsNext(!xIsNext);
    }

    function changeTo(nextMove){
        setCurrentMove(nextMove);
        setxIsNext(nextMove % 2 === 0);
    }

    const moves = history.map((squares, move)=> {
        let description;
        if(move > 0){
            description = "Go to move #" + move;
        }else{
            description = "Start with" + move;
        }
        return(
            <li key={move}>
                <button  onClick={()=> changeTo(move)}>{description}</button>
            </li>
        )
    })

  return (
  <div className="game">
    <div className="game-board">
        <Board xIsNext = {xIsNext} squares = {currentSquares} onPlay = {handleSquares} />
    </div>
    <div className="game-info">
        <ol>{Moves}</ol>
    </div>
  </div>
  );
}
