console.log(solution('aaaaabc'));

function solution(str){
    const counters = {}

    for(const char of str){
        if(!counters[char]){
            counters[char] = 0
        }

        counters[char]++
    }

    const countersArray = Object.values(counters)

    const countersOfCounters = {}

    for(const c of countersArray){
        if(!countersOfCounters[c]){
            countersOfCounters[c] = 0
        }

        countersOfCounters[c]++
    }

    if(Object.keys(countersOfCounters).length === 1){
        return 'YES'
    }
    else{
        if(Object.keys(countersOfCounters).length > 2){
            return 'NO'
        }

        if((Object.values(countersOfCounters)[0] > 1) && (Object.values(countersOfCounters)[1] > 1)){
            return 'NO'
        }

        const max = Math.max(Object.keys(countersOfCounters)[0], Object.keys(countersOfCounters)[1])
        const min = Math.min(Object.keys(countersOfCounters)[0], Object.keys(countersOfCounters)[1])

        if(((max-min) > 1) && ((min > 1) || (countersOfCounters[min] > 1))){
            return 'NO'
        }

        return 'YES'
    }
}
