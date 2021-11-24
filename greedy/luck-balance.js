console.log(solution(3,[[5, 1], [2, 1], [1, 1], [8, 1], [10, 0], [5, 0]]))

function solution(k, contests){
    const zeroContests = []
    let oneContests = []

    contests.forEach(contest => {
        if(contest[1]){
            oneContests.push(contest[0])
        }
        else{
            zeroContests.push(contest[0])
        }
    })

    oneContests = oneContests.sort((a,b) => b-a)

    const sum1 = zeroContests.reduce((acc,v) => acc+v,0)

    const sum2 = oneContests.reduce((acc,v, idx) => idx<k?acc+v:acc-v,0)

    return sum1+sum2
}