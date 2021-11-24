console.log(solution(2,[[1,0,5],[1,1,7],[1,0,3],[2,1,0],[2,1,1]]))

function solution(n, queries){
    const result = []

    let lastAnswer = 0

    const arr = []

    queries.forEach(query => {
        const queryType = query[0]
        const x = query[1]
        const y = query[2]

        if(queryType === 1){
            const idx = (x^lastAnswer)%n
            
            if(!arr[idx]){
                arr[idx] = []
            }

            arr[idx].push(y)
        }

        if(queryType === 2){
            const idx = (x^lastAnswer)%n
            
            lastAnswer = arr[idx][y%arr[idx].length]
            result.push(lastAnswer)
        }

    });

    return result
}