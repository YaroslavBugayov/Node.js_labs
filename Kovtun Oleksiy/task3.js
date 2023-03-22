/*
Kovtun Oleksiy IO-03 Task3

Task:
Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.
For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.
As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.
If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.
*/

function first_non_repeating_letter(string_input){
    if (!typeof(string_input) === String){
        throw new Exception("Invalid parameter type");  // if type is not a string throw an exception
    }

    const array = string_input.split('');
    
    const res = array.find(e => {
        return array.filter(elem => elem.toLowerCase() === e.toLowerCase() ).length === 1
    });
     
    return res === undefined? "": res
}


const input = "DWFfefed"    //write here your string
try{
    const res = first_non_repeating_letter(input)
    if (res === ""){
        console.log("No not repeating characters");
    }
    else{
        console.log(`Not repeated character: ${res}`);
    }
}
catch{
    console.log("Input is not a string type");
}

