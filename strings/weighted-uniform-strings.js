//console.log(solution('aaabbbbcccddd',[5,9,7,8,12,5]))
console.log(solution('abbcccdddd',[1,7,5,4,15]))

function solution(s, queries){
    const weights = {}

    s = s.split('')

    let currentChar = ''
    let currentWeight = 0

    for(let i = 0;i<s.length;i++){
        if(s[i] === currentChar){
            currentWeight += (s[i].charCodeAt(0)-96)            
        }
        else{
            currentChar = s[i]
            currentWeight = s[i].charCodeAt(0)-96
        }

        weights[currentWeight] = true
    }
    
    return queries.map(query => weights[query] ? 'Yes' : 'No')
}

