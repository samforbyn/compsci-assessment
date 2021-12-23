// Sum Zero :

const array = [0, 21, 33, 6, 0, -9]
const sumZero = arr => {

    let placeholder = false
    
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
                placeholder = true
                break;
            }
        }
        if(placeholder === true){
            break;
        }
    }
    
    console.log(placeholder)
}
// sumZero(array)

// Runtime complexity: O(n^2)
// Space complexity: O(n^2)


// Unique Characters:

const uniqueChars = word => {
    toggle = true
    arr =[]
    for(let letter of word){
        console.log(letter)
        if(!arr.includes(letter)){
            arr.push(letter)
        }else{
            toggle = false
        }
    }
    console.log(toggle)
}

// uniqueChars("Moonday")

// Runtime complexity: O(n)
// Space complexity: O(n)


// Pangram Sentence: 

const pangram = str => {
    return new Set(str.toLowerCase().match(/[a-z]/g)).size === 26
}
 
console.log(pangram("The Quick Brown Fox Jumps over the lazy dog"))

// Runtime complexity: O(1)
// Space complexity: O(1)


// Longest word: 

const find_longest_word = arr => {
    let longest = 0
    for(let i = 0; i < arr.length; i++){
        let wordLen =  arr[i].length
        if(wordLen > longest){
            longest = wordLen
        }
    }
    console.log(longest)
}
// find_longest_word(["hi", "hello", "rapidoqueso"])

// Runtime complexity: O(n)
// Space complexity: O(n)