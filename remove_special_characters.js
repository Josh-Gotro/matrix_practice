// remove the special characters from a string.

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