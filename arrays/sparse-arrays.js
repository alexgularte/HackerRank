console.log(solution(['ab','ab','abc'],['ab','abc','bc']))

function solution(strings, queries){
    return queries.map(query => {
        return strings.reduce((acc, val) => val===query?acc+1:acc,0)
    })
}