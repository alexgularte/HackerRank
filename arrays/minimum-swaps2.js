console.log(solution([4,3,1,2]))

function solution(A){
    let i = 0
    let swaps = 0

    while (i < A.length){
        if(A[i] !== i+1){
            const aux = A[A[i]-1]
            A[A[i]-1] = A[i]
            A[i] = aux
            swaps++
        }
        else{
            i++
        }
    }

    return swaps
}