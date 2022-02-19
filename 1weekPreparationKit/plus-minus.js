console.log(solution([-4,3,-9,0,4,1]));

function solution(arr){
    const positives = arr.filter(n => n > 0).length
    const negatives = arr.filter(n => n < 0).length
    const zeros = arr.filter(n => n === 0).length

    console.log((positives/arr.length).toFixed(6));
    console.log((negatives/arr.length).toFixed(6));
    console.log((zeros/arr.length).toFixed(6));
}