console.log(solution(8,'DDUUUUDD'));

function solution(steps, path){
    let currentLevel = 0
    let valleys = 0

    for(const step of path){
        const previousLevel = currentLevel

        currentLevel += step === 'U' ? +1 : -1
        
        if((currentLevel === 0) && (previousLevel < 0)){
            valleys++
        }
    }

    return valleys
}