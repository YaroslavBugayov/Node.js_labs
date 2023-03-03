/*
Kovtun Oleksiy IO-03 Task 1

Task:
Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
With list [20,37,20,21] and number 1, the result would be [20,37,21].
*/

function deleteNth(arr,n){
    let newarr = []
    arr.forEach(element => {
        if (newarr.filter(a => element === a).length < n){
            newarr.push(element);
        }
    });
    return newarr;
}


// data for test:
const data = [10, 2, 4, 53, 2, 4, 4, 9, 6];
const res = deleteNth(data, 1);
console.log(res);