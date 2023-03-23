import { useEffect, useState } from "react";
import styles from "./Sudoku.module.css";

// https://www.youtube.com/watch?v=YzMEjfQPsfA

// https://www.youtube.com/watch?v=TOI7iGnzHlg


const isValidPlaced = (
  grid: number[][],
  row: number,
  col: number,
  number: number
) => {
  // console.log("grid:", grid,"row :", row, "col :", col, number);
  for (
    let i = 0;
    i < 9;
    i++ //current row from start to finish
  ) {
    if (grid[i][col] === number) {
      return false;
    }
  }
  for (let i = 0; i < 9; i++) {
    if (grid[row][i] === number) {
      return false;
    }
  }
  let localBoxRow = row - (row % 3);
  let localBoxCol = col - (col % 3);
  for (let i = localBoxRow; i < localBoxRow + 3; i++) {
    for (let j = localBoxCol; j < localBoxCol + 3; j++) {
      if (grid[i][j] === number) {
        return false;
      }
    }
  }
  return true;
};



const Sudoku = () => {

  const [sudokuArray, setSudokuArray] = useState<number[][]>( )

 function getOriginalCopy (arr:number[][] )  {
    return JSON.parse(JSON.stringify(arr));
  }

  const onInputChange = (e: any, row: number, col: number) => {
    if (sudokuArray){let value = parseInt(e.target.value) || 0, grid = getOriginalCopy(sudokuArray);
    

    if (value === 0 || value >=1 && value <=9){
      grid[row][col] = value;
      console.log(grid[row][col] = value)
    }
    setSudokuArray(grid)
  }
    
  }
 
  const solve = (grid: any) => {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (grid[row][col] === 0) {
          for (let guess = 1; guess < 10; guess++) {
            if (isValidPlaced(grid, row, col, guess)) {
              grid[row][col] = guess;
              if (solve(grid)) {
                return true;
              }
              grid[row][col] = 0;
            }
          }
          return false;
        }
      }
    }
    return true;
  };

 const createInitialSudokuBoard = () => {
  let board = [];
  for (let i = 0; i < 9; i++) {
    board[i] = Array(9).fill(0);
  }
  console.log("initialBoard:", board)
  return board
 }

  const createRandomPuzzle = () => {
  let board = createInitialSudokuBoard();
    for (let i = 0; i < 9; i++) {
      let number = Math.floor(Math.random() * 9) + 1;
      while (!isValidPlaced(board, 0, i, number)) {
        number = Math.floor(Math.random() * 9) + 1;
      }
      board[0][i] = number;
    }
    return board;
  };

  const createBoard = () => {
    let board = createRandomPuzzle();

    solve(board);
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (Math.random() > 0.3) board[i][j] = 0;
      }
    }
    return board;
  };

  //  solve(newBoard);
  // console.log(createBoard());

  useEffect(() => {
    if(!sudokuArray) {
    setSudokuArray(createBoard())
    console.log(sudokuArray)}
  }, []);

  return (
    <div>
      <div className={styles["sudoku-board"]}>
        <p>Sudoku</p>
        <div>
          <table className={styles["sudoku-board__table"]}>
            <tbody className={styles["sudoku-board__table-body"]}>
              {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((row, rowIndex) => {
                return (
                  <tr
                    key={rowIndex}
                    className={styles["sudoku-board__table-row"]}
                  >
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((col, colIndex) => {
                      return (
                        <td
                          key={rowIndex + colIndex}
                          className={styles["sudoku-board__table-col"]}
                        >
                          <input
                            onChange={(e) => onInputChange(e, row, col)}
                            value={sudokuArray && sudokuArray[row][col] === 0 ? '' : sudokuArray && sudokuArray[row][col]}
                            className={styles["sudoku-board__cell"]}
                            type="text"
                            disabled={sudokuArray && sudokuArray[row][col] !== 0}
                          />
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Sudoku;
