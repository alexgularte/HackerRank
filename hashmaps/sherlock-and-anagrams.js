console.log(solution('kkkk'))

function solution(str){
    const substrings = getSubstringArray(str)

    const hashCounters = {}

    for(const s of substrings){
        const hash = getHash(s)

        if(!hashCounters[hash]){
            hashCounters[hash] = 1
        }
        else{
            hashCounters[hash]++
        }
    }

    return Object.values(hashCounters).reduce((acc,val) => acc+ ((val>1)?((val*(val-1))/2):0),0)
}

function getSubstringArray(str){
    const subStrings = []

    for(let i = 0;i<str.length;i++){
        for(let j = i+1; j<str.length+1;j++){
            subStrings.push(str.substring(i,j))
        }
    }

    return subStrings
}

function getHash(str){
    const hash = new Array(26).fill(0)    

    for(const char of str){
        hash[char.charCodeAt(0)-97]++
    }

    return hash.toString()
}