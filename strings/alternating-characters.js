console.log(solution('AABAAB'));

function solution(str){
    // let counter = 0

    // for(let i = 1; i<str.length;i++){
    //     if(str[i] === str[i-1]){
    //         console.log(i,str[i],str[i-1])
    //         counter++
    //     }
    // }

    // return counter
    return str.split('').reduce((acc, val, idx, str) => acc + (idx>0?((str[idx] === str[idx-1])?1:0):0),0)
}