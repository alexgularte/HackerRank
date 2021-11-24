console.log(solution('a'));

function solution(s){
    const pairs = getPairs()

    const strings = pairs.map(pair => s.replace(RegExp(`[^${pair[0]}${pair[1]}]`,'g'),''))
    const validStrings = strings.filter(s => isValid(s))

    return validStrings.map(s => s.length).sort((a,b) => b-a)[0] || 0
}

function isValid(s){
    if(s.length < 2){
        return false
    }
    const arr = s.split('')

    for(let i = 0;i<arr.length-1;i++){
        if(arr[i] === arr[i+1]){
            return false
        }
    }

    return true
}

function getPairs(){
    const letters = getAllLetters()
    const pairs = []

    letters.forEach(l1 => {
        letters.forEach(l2 => {
            if(l1 !== l2){
                pairs.push([l1,l2])
            }
        })
    })

    return pairs
}

function getAllLetters(){
    return Array(26).fill(0).map((v,i)=>String.fromCharCode(i+97))
}