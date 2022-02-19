console.log(solution([
    [1,2,3],
    [4,5,6],
    [9,8,9]
]))

function solution(arr){
    const diag1 = calculateDiag1(arr)
    const diag2 = calculateDiag2(arr)

    return Math.abs(diag1-diag2)
}

function calculateDiag1(arr){
    return arr.reduce((acc,val,i)=>acc+val[i],0)
}

function calculateDiag2(arr){
    return arr.reduce((acc,val,i)=>acc+val[val.length-i-1],0)
}