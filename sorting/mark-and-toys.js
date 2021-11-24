console.log(solution([1,2,3,4],7))


function solution(prices, k){
    const pricesSorted = prices.sort((a, b) => parseInt(a) - parseInt(b))
    let countUnits = 0

    for(let i = 0;i<pricesSorted.length;i++){
        if(pricesSorted[i] > k){
            break
        }
        else{
            k -= pricesSorted[i]
            countUnits++
        }
    }

    return countUnits
}