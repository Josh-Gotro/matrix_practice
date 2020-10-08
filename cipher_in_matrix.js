
// Encrypt a message
const message = "But soft, what light through yonder window breaks?"
const r = 5;
const c = 5;


function cipher(message, r, c) {

    // 
    // Create Matrix
    let mat = [];
    let pos = 0;

    for (let row = 0; row < r; row++) {
        let arr2 = [];
        for (let col = 0; col < c; col++) {
            arr2.push(message[pos])
            pos++
        }
        mat.push(arr2)
    }

    // Transform Matrix into encrypted string
    let ans = "";
    for (let col = 0; col < c; col++) {
        for (let row = 0; row < r; row++) {
            ans += mat[row][col]
        }
    }
    console.log(ans)

}

cipher(message, r, c)



// Decipher encrypted message

let encString = "w a hyvcaoooturl rioi trsfe?"
let row = 4
let col = 7

function deCipher(encString, rows, cols) {
    let array = []
    let counter = 0;

    for(let col = 0; col < cols; col++) {
        // create seven rows
        let subArray = [];
        for(let row = 0; row < rows; row++){
            // for each row do this four times
            subArray.push(encString[counter])
            counter++
        }
        array.push(subArray)
        // console.log(array)
    }

    ans = "";
    for(let col = 0; col < array[0].length; col++){
        for(let row = 0; row < array.length; row++){
            ans += array[row][col]
        }
    }
    return ans
}

console.log(deCipher(encString, row, col))

// "w a hyvcaoooturl rioi trsfe?"
// 'what is your favorite color?'
// row = 4
// col = 7

// [
//     ['w', ' ', 'a', ' '],
//     ['h', 'y', 'v', 'c'],
//     ['a', 'o', 'o', 'o'],
//     ['t', 'u', 'r', 'l'],
//     [' ', 'r', 'i', 'o'],
//     ['i', ' ', 't', 'r'],
//     ['s', 'f', 'e', '?']
// ]
