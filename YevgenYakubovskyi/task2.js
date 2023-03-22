/*
Yakubovskyi Yevgen IO-03 Task 2
Task:
Write a function that outputs the transpose of a matrix - 
a new matrix where the columns and rows of the original are swapped.

For example, the transpose of:
| 1 2 3 |
| 4 5 6 |
is
| 1 4 |
| 2 5 |
| 3 6 |

The input to your function will be an array of matrix rows. 
You can assume that each row has the same length, 
and that the height and width of the matrix are both positive.
*/

function transposeMatrix(matrix) {
  const numRows = matrix.length;
  const numCols = matrix[0].length;

  // Initialize a new array to hold the transposed matrix
  const transposedMatrix = new Array(numCols).fill(null).map(() => new Array(numRows).fill(null));

  // Loop through each cell in the original matrix and place it in the corresponding cell in the transposed matrix
  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      transposedMatrix[col][row] = matrix[row][col];
    }
  }

  return transposedMatrix;
}
// Run func with data
const matrix = [
  [1, 2],
  [3, 4],
  [5, 6]
];

const transposedMatrix = transposeMatrix(matrix);

console.log(transposedMatrix);