import styles from "./Sudoku.module.css";

const Sudoku = () => {
  const isValidPlaced = (grid, row, col, number) => {
    // console.log(grid, row, col, number);
    for (
      let i = 0;
      i < 9;
      i++ //current row from start to finish
    ) {
      if (grid[i][col] === number) {
        return false;
      }
    }
    for(let i = 0; i < 9; i++) {
      if (grid[row][i] === number) {
        return false;
      }
    }
    let localBoxRow = row -(row % 3);
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

  const createRandomPuzzle = () => {
    let board = [];
    for (let i = 0; i < 9; i++) {
      board[i] = Array(9).fill(0);
    }
    for (let i = 0; i < 9; i++) {
     let  number = Math.floor(Math.random() * 9) + 1;
        while(!isValidPlaced(board, 0, i, number)) {
          number = Math.floor(Math.random() * 9) + 1;
      }
      board[0][i] = number;
    }
    return board;
  };
  
const createBoard = () => {
    let board = createRandomPuzzle();
    // let board = [];
  
    solve(board);
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if(Math.random() > 0.3) 
          board[i][j] = 0;
        
      }

    }
    return board;
  };

  let newBoard = createBoard();







//  solve(newBoard);
  console.log(createBoard());

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
                            className={styles["sudoku-board__cell"]}
                            type="text"
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
