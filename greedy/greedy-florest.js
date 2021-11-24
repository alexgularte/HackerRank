console.log(solution(3, [1, 3, 5, 7, 9]));

function solution(k, c){
    c = c.sort((a,b)=>b-a)

    let mult = 0
    let sum  = 0

    c.forEach((v, idx) => {
        if((idx>0) && (idx%k === 0)){
            mult++
        }
        sum += (1+mult)*v
    });
    
    return sum
}