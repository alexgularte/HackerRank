console.log(solution(2, [1, 5, 3, 4, 2]));

function solution(k, arr){
    arr = arr.sort((a,b) => a-b)

    const hash = {}

    arr.forEach(e => {
        hash[e] = true
    })

    let count = 0

    arr.forEach(e => {
        if(hash[e+k]){
            count++
        }
    })

    return count
}