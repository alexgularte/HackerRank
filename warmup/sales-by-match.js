console.log(solution(10, [1, 1, 3, 1, 2, 1, 3, 3, 3, 3]));

function solution(n, ar){
    const sortedArray = ar.sort((a, b) => parseInt(a) - parseInt(b))

    let pairCounter = 0
    let currentColor
    let currentColorCounter = 0

    for(const color of sortedArray){
        if(color === currentColor){
            currentColorCounter++
        }
        else{
            pairCounter += Math.floor(currentColorCounter/2)
            currentColor = color
            currentColorCounter = 1
        }
    }

    return pairCounter + Math.floor(currentColorCounter/2)
}