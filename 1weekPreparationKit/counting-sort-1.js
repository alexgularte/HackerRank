console.log(solution([1,1,3,2,1]));

function solution(arr){
    return arr.reduce((acc,curr) => {
        acc[curr]++
        return acc
    }, new Array(100).fill(0))
}