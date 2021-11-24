console.log(solution([[1,2,3],[4,5,6],[9,8,9]]));

function solution(arr){
    let diag1 = 0
    let diag2 = 0

    for(let i = 0;i<arr.length;i++){
        diag1 += arr[i][i]
        diag2 += arr[i][arr.length-1-i]
    }

    return Math.abs(diag1-diag2)
}