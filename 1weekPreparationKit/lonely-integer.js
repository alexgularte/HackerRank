console.log(solution([1,2,2]));

function solution(arr){
    const ocurrencies = arr.reduce((acc, val) => {
        if(acc[val] === true){
            acc[val] = false
        }

        if(acc[val] === undefined){
            acc[val] = true
        }

        return acc
    },{})

    
    return Object.keys(ocurrencies).filter(k => ocurrencies[k])[0]
}