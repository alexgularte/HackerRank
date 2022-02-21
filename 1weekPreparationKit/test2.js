console.log(solution([[112, 42, 83, 119],[56, 125, 56, 49],[15, 78, 101, 43],[62, 98, 114, 108]])); //414

function solution(mat){
    let n = mat.length/2
    let max = 0
    let total = 0

    for (let row = 0;row<n;row++){
        for(let col = 0;col<n;col++){
            max = Number.MIN_VALUE
            max = Math.max(mat[row][col], max)
            max = Math.max(mat[row][2*n-col-1], max)
            max = Math.max(mat[2*n-row-1][col], max)
            max = Math.max(mat[2*n-row-1][2*n-col-1], max)

            total += max
        }
    }

    return total
}