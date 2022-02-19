console.log(solution([1,2,4]));

function solution(arr){
    arr.sort((a,b) => a-b)

    return arr[Math.floor(arr.length/2)]
}