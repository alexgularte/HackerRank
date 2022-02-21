console.log(solution('9875',4));

function solution(n, k){
    return superD((n.split('').reduce((prev,curr) => prev+parseInt(curr),0)*k).toString())
}

function superD(n){
    if(n.length === 1){
        return n
    }

    return superD(n.split('').reduce((prev,curr) => prev+parseInt(curr),0).toString())
}