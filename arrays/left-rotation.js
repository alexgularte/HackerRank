console.log(solution([1,2,3,4,5],6))

function solution(a, d){
    if(d >= a.length){
        d = d%a.length
    }

    if(d === 0){
        return a
    }

    const rotatedArray = new Array(a.length)

    for(let i = 0;i<rotatedArray.length;i++){
        let j = i+d

        if(j > (a.length-1)){
            j -= a.length
        }

        rotatedArray[i] = a[j]
    }

    return rotatedArray
}