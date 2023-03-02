/*
TASK:
Story
The Pied Piper has been enlisted to play his magical tune and coax all the rats out of town.

But some of the rats are deaf and are going the wrong way!

Kata Task
How many deaf rats are there?

Legend
P = The Pied Piper
O~ = Rat going left
~O = Rat going right
Example
ex1 ~O~O~O~O P has 0 deaf rats

ex2 P O~ O~ ~O O~ has 1 deaf rat

ex3 ~O~O~O~OP~O~OO~ has 2 deaf rats
 */

const countDeafRats = function (town) {
    town = town.replaceAll(" ", "")
    const left = town.split("P")[0]
    const right = town.split("P")[1]

    let count = 0

    for (let i = 0; i < left.length - 1; i += 2) {
        if (!(left[i] === "~" && left[i + 1] === "O")) {
            count++
        }
    }

    for (let i = 0; i < right.length - 1; i += 2) {
        if (!(right[i] === "O" && right[i + 1] === "~")) {
            count++
        }
    }

    return count;
};