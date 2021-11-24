console.log(solution([10,20,30,40,50], 3))

function solution(expenditure, d){
    let notificationCounter = 0

    const trailing = expenditure.slice(0, d)
    const sortedTrailing = trailing.sort((a,b) => a-b)

    for(let i = d;i<expenditure.length;i++){
        if(expenditure[i] >= 2*calculateMedian(sortedTrailing)){
            notificationCounter++
        }

        if(i < (expenditure.length-1)){
            addValueToSortedTrailing(sortedTrailing, expenditure[i-d], expenditure[i])
        }
    }

    return notificationCounter
}

function calculateMedian(arr){
    if(arr.length%2 === 0){
        return (arr[arr.length/2] + arr[(arr.length/2)-1])/2
    }
    else{
        return arr[Math.floor(arr.length/2)]
    }
}

function addValueToTrailing(trailing, value){
    for(let i =0;i<trailing.length;i++){
        if(i === (trailing.length-1)){
            trailing[i] = value
        }
        else{
            trailing[i] = trailing[i+1]
        }
    }
}

function addValueToSortedTrailing(t, oldValue, newValue){
    let indexOfOldValue = t.indexOf(oldValue)
    t.splice(indexOfOldValue,1,newValue)

    if(t[indexOfOldValue] > t[indexOfOldValue+1]){
                while((t[indexOfOldValue] > t[indexOfOldValue+1]) && (indexOfOldValue < t.length)){
            const aux = t[indexOfOldValue]
            t[indexOfOldValue] = t[indexOfOldValue+1]
            t[indexOfOldValue+1] = aux
            indexOfOldValue++
        }
    }
    else{
        if(t[indexOfOldValue] < t[indexOfOldValue-1]){
            while((t[indexOfOldValue] < t[indexOfOldValue-1]) && (indexOfOldValue >= 0)){
                const aux = t[indexOfOldValue-1]
                t[indexOfOldValue-1] = t[indexOfOldValue]
                t[indexOfOldValue] = aux
                indexOfOldValue--
            }
        }
    }
}

