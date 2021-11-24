console.log(solution('abcbaba'));


function solution(str){
    return calculateAllTheSameCharacters(str)+calculateExceptTheMiddle(str)
}

function calculateAllTheSameCharacters(str){
    const arr = []

    let lastChar
    let lastSubStr

    for(let i = 0;i<str.length;i++){
        if(str[i] === lastChar){
            lastSubStr += str[i]    
        }
        else{
            if(lastChar && lastSubStr){
                arr.push(lastSubStr)
            }

            lastChar = str[i]
            lastSubStr = str[i]
        }
    }

    if(lastChar && lastSubStr){
        arr.push(lastSubStr)
    }

    return arr.map(e => (e.length*(e.length+1))/2).reduce((acc, val) => val+acc,0)
}


function calculateExceptTheMiddle(str){
    let sum = 0

    for(let i = 0;i<str.length;i++){
        if((str[i-1] === str[i+1]) && (str[i+1] !== str[i])){
            sum += getCountSubStrs(str, i)
        }
    }

    return sum
}

function getCountSubStrs(str, pivotIdx){
    let size = 1

    while(str[pivotIdx+size] && str[pivotIdx-size] && (str[pivotIdx+size] === str[pivotIdx-1]) && (str[pivotIdx-size] === str[pivotIdx-1])){
        size++
    }

    return size-1
}