solution([1,3,5,7,9]);

function solution(arr){
    const sum = arr.reduce((acc, val) => acc+val,0)
    const min = arr.reduce((acc, val) => val<acc?val:acc,arr[0])
    const max = arr.reduce((acc, val) => val>acc?val:acc,arr[0])

    console.log(`${sum-max} ${sum-min}`)
}