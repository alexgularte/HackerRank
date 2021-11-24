console.log(solution(3,[100,
    200,
    300,
    350,
    400,
    401,
    402]));

function solution(k, arr){
    let begin = 1
    let end = k

    arr = arr.sort((a,b) => a-b)

    let minUnfairness = arr[k-1] - arr[0]

    while(end < arr.length){
        const unfairness = arr[end] - arr[begin]

        if(unfairness < minUnfairness){
            minUnfairness = unfairness
        }

        begin++
        end++
    }

    return minUnfairness
}