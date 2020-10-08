const message = "But soft, what light through yonder window breaks?"
const r = 5;
const c = 5;


function cipher(message, r, c){

// Create Matrix
    let mat = [];
    let pos = 0;

    for(let row = 0; row < r; row++){
        let arr2 = [];
        for(let col = 0; col < c; col++){
            arr2.push(message[pos])
            pos++
        }
        mat.push(arr2)
    }

// Transform Matrix into encrypted string
    let ans = "";
    for(let col = 0; col < c; col++){
        for(let row = 0; row < r; row++){
            ans += mat[row][col]
        }
    }
console.log(ans)

}

cipher(message, r,c)


let aString = "foo#bar@rter%";

function flipper(string) {
    let alphnum = [];
    let specIn = [];

    // separate special characters from alphanumeric
    for (let i = 0; i < string.length; i++) {
        let code = string.charCodeAt(i);
        if ((code > 47 && code < 58) || (code > 64 && code < 91) || (code > 96 && code < 123)) {
            alphnum.push(string[i])
        } else {
            let arr = [];
            arr.push(string[i], i)
            specIn.push(arr)
        }
    }

    // Reverse alphanum
    let ans = alphnum.reverse()

    for (let i = 0; i < specIn.length; i++) {
        ans.splice(specIn[i][1], 0, specIn[i][0])
    }

    return ans.join('')


}

console.log(flipper(aString))