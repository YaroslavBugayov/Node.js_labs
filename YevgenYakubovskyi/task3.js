/*
Yakubovskyi Yevgen IO-03 Task 3
Task:
Your task, is to create N×N multiplication table, of size provided in parameter.

For example, when given size is 3:
1 2 3
2 4 6
3 6 9

For the given example, the return value should be:
[[1,2,3],[2,4,6],[3,6,9]]
*/

function multiplicationTable(size) {
  const table = [];
  
  for (let row = 1; row <= size; row++) {
    const rowArray = [];
    for (let col = 1; col <= size; col++) {
      rowArray.push(row * col);
    }
    table.push(rowArray);
  }
  
  return table;
} 

const tableSize = 4;
const table = multiplicationTable(tableSize);

console.log(table); // Output: [[1, 2, 3], [2, 4, 6], [3, 6, 9]]