console.log(solution([2,1,3,5,6], 5));
//

function solution(cost, money){
    const hash = {}

    cost.forEach((c,idx) => {
        if(!hash[c]){
            hash[c] = []
        }

        hash[c].push(idx)
    });

    for(let i = 0;i<cost.length;i++){
        if(cost[i] <= money){
            const remainingAmount = money - cost[i]
            if(hash[remainingAmount] && ((cost[i] !== remainingAmount) || (hash[remainingAmount].length > 1))){
                const hashValue = hash[remainingAmount]
                console.log(`${i+1} ${hashValue[hashValue.length-1]+1}`);
                return
            }
        }        
    }
}