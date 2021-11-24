console.log(solution([2, 5, 1, 3, 4]))

function solution(q){
    let bribesCounter = 0
    let bribeAnalysis = 0

    while(bribeAnalysis < 3){
        bribeAnalysis++

        for(let i = q.length-2;i>=0; i--){
            if(q[i] > q[i+1]){
                if(bribeAnalysis === 3){
                    console.log('Too chaotic')
                    return
                }
                bribesCounter++

                const aux = q[i]
                q[i] = q[i+1]
                q[i+1] = aux
            }
        }
    }

    console.log(bribesCounter);
}