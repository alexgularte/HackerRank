console.log(solution([0,0,0,0,1,0]))

function solution(c){
    let jumps = 0
    let currentPosition = 0

    while(true){
        if(currentPosition === c.length-1){
            return jumps
        }

        if(currentPosition === c.length-2){
            return jumps+1
        }

        if(c[currentPosition+2]){
            currentPosition++
        }
        else{
            currentPosition += 2
        }

        jumps++        
    }
}

