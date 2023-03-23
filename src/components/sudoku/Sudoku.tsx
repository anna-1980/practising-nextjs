import styles from  "./Sudoku.module.css"

const Sudoku = () => {

// let board = [
//   [0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0],
// ]
const  Board = () => {
  let board = [];
for (let i = 0; i < 9; i++) {
  board[i] = Array(9).fill(0);
  console.log(board);
  return board;
}}

const createPuzzle = () => {
   Board;

}


  return (
    <div>
       
        <div className={styles["sudoku-board"]}>
          <p>Sudoku</p>
          <div>
          <table className={styles["sudoku-board__table"]}>
             <tbody className={styles["sudoku-board__table-body"]}>
               {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((row, rowIndex) => {
                 return (
                   <tr key={rowIndex} className={styles["sudoku-board__table-row"]}>
                     {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((col, colIndex) => {
                       return (
                         <td key={rowIndex + colIndex} className={styles["sudoku-board__table-col"]}>
                           <input className={styles["sudoku-board__cell"]} type="text" />
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
  )
}

export default Sudoku