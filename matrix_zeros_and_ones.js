const n = 2;
const m = 2;
let ind = [[1, 1], [0, 0]];

function oddCells(row, col, ind) {
    let mat = [];

    // create matrix n*m filled with 0's
    let r = row;
    while(r > 0 ){
        let c = col;
        let arr2 = [];
        while(c > 0){
            arr2.push(0);
            c--;
        }
        mat.push(arr2);
        r--;
    } 

    // increment values based on ind 

    // increment matrix 
    ind.forEach((index) => {
        let row = index[0];
        let col = index[1];

        // increment col
        for (let j = 0; j < n; j++) {
            mat[j][col]++;
        }

        // increment row
        for (let i = 0; i < m; i++) {
            mat[row][i]++;
        }
    });
console.log(mat)
    // count odds elements
    let flat = mat.flat()
    ans = flat.filter(num => num % 2).length
    console.log(ans)
};

oddCells(n, m, ind)


// increment matrix 
indices.forEach((index) => {
    let row = index[0];
    let col = index[1];

    // increment col
    for (let j = 0; j < n; j++) {
        outer[j][col]++;
    }

    // increment row
    for (let i = 0; i < m; i++) {
        outer[row][i]++;
    }
});

return countOdds(outer);
};


Solution 1
const oddCells = (n, m, indices) => {
    let count = 0;
    // make matrix; fill with 0
    let matrix = Array.from({ length: n }, () =>
        Array.from({ length: m }, () => 0)
    );

    for (const [r, c] of indices) {
        // update row
        matrix[r].forEach((cv, idx, array) => array[idx]++)
        // update col
        matrix.forEach(row => row[c]++)
    }

    // counts odds
    matrix.forEach(arr => {
        arr.forEach(cv => cv % 2 !== 0 ? count++ : null)
    })

    return count;
};
