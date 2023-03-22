/*
Kovtun Oleksiy IO-03 Task2

Task:
Snail Sort
Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]
*/

function snail_sort(array, start = 0, end = array[0].length-1, x = 0, y = 0, res_arr = []){
    if (start > end){
        return res_arr;
    }
    else if (start == end){
        res_arr.push(array[y][x])
        return res_arr;
    }
    res_arr.push(array[y][x])
    if (x >= start && x < end  && y == start){ 
        x++;
    }
    else if (x == end && y >= start && y < end){
        y++;
    }
    else if (x > start && x <= end && y == end){
        x--;
    }
    else if (x == start && y <= end && y > start){
        if (y == start+1){
            return snail_sort(array, start+1, end-1, x+1, y, res_arr)
        }
        y--;
    }
    return snail_sort(array, start, end, x, y, res_arr)
}
                        

// data for tests:

const data = [[1, 2, 3],
              [8, 9, 4],
              [7, 6, 5]];
// const data = [[1, 2, 3, 4],
//             [12, 13, 14, 5],
//             [11, 16, 15, 6],
//             [10, 9, 8, 7]]
// const data = [[1]]
const res = snail_sort(data);
console.log(res)