console.log(solution('cde', 'abc'))

function solution(strA, strB){
    const hash = {}

    for(const char of strA){
        if(!hash[char]){
            hash[char] = {
                amountA: 0,
                amountB: 0,
            }
        }

        hash[char].amountA++
    }

    for(const char of strB){
        if(!hash[char]){
            hash[char] = {
                amountA: 0,
                amountB: 0,
            }
        }

        hash[char].amountB++
    }

    return Object.values(hash).reduce((acc, o) => acc+Math.abs(o.amountA-o.amountB),0)
}