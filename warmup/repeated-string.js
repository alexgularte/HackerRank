console.log(solution('abca', 1000000000000));

function solution(s, n){
    const aCounterArray = new Array(s.length).fill(0)
    
    let aCounter = 0

    for(const idx in s){
        if(s[idx] === 'a'){
            aCounter++
        }

        aCounterArray[idx] = aCounter
    }

    const remainder = n%s.length

    return (aCounter * Math.floor(n/s.length)) + (remainder ? aCounterArray[remainder-1] : 0)
}