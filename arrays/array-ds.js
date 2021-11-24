console.log(solution([1,2,3]))

function solution(a){
    const reversed = []

    a.forEach(element => {
        reversed.unshift(element)
    });

    return reversed
}