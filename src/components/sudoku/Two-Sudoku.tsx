import { useState } from "react";
import styles from "./Sudoku.module.css";
import cn from "classnames";

type CellValue = number | null;

type Board = CellValue[][];

const initialBoard: Board = Array.from({ length: 9 }, () =>
  Array.from({ length: 9 }, () => 0)
);

const SudokuGame = () => {
  const [board, setBoard] = useState<Board>(initialBoard);

  const handleCellChange = (
    row: number,
    col: number,
    value: CellValue
  ): void => {
    // Update the value of the cell at (row, col)
    const newBoard = [...board];
    newBoard[row][col] = value;
    setBoard(newBoard);
  };

  const checkAnswer = (): boolean => {
    // Check each row to see if it contains all numbers from 1 to 9
    for (let i = 0; i < 9; i++) {
      const rowValues = new Set(board[i]);
      if (rowValues.size !== 9 || rowValues.has(null)) {
        return false;
      }
    }
  
    // Check each column to see if it contains all numbers from 1 to 9
    for (let j = 0; j < 9; j++) {
      const columnValues = new Set();
      for (let i = 0; i < 9; i++) {
        columnValues.add(board[i][j]);
      }
      if (columnValues.size !== 9 || columnValues.has(null)) {
        return false;
      }
    }
  
    // Check each 3x3 sub-grid to see if it contains all numbers from 1 to 9
    for (let i = 0; i < 9; i += 3) {
      for (let j = 0; j < 9; j += 3) {
        const subGridValues = new Set();
        for (let m = 0; m < 3; m++) {
          for (let n = 0; n < 3; n++) {
            subGridValues.add(board[i + m][j + n]);
          }
        }
        if (subGridValues.size !== 9 || subGridValues.has(null)) {
          return false;
        }
      }
    }
  
    // All checks passed, the board is valid
    console.log("run chack:" )
    return true;
  };

  const resetGame = (): void => {
    // Reset the board to its initial state
    setBoard(initialBoard);
  };

  console.log("board:", board)
  return (
    <div className={styles["sudoku-board2"]}>
    <div className={styles["sudoku-board__table2"]}>
      {/* Display the Sudoku game board */}
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className={styles["sudoku-board__table-row2"]}>
          {row.map((value, colIndex) => (
            <input
            // className={`${ styles["sudoku-board__cell2"], styles["sudoku-board__table-col2"]}`}
            className={ cn(styles["sudoku-board__cell2"], styles["sudoku-board__table-col2"] )}
              key={colIndex}
              type="text"
            //   min="1"
            //   max="9"
              value={value || ""}
              onChange={(e) =>
                handleCellChange(rowIndex, colIndex, Number(e.target.value))
              }
            />
          ))}
        </div>
      ))}
      {/* Add buttons for the user to check their answers and reset the game */}
      <button onClick={checkAnswer}>Check Answer</button>
      <button onClick={resetGame}>Reset Game</button>
    </div>
    </div>
  );
};

export default SudokuGame;