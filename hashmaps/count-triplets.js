// 5/13 test cases failed

console.log(solution([1,1,1],1))

function solution(arr, r){
    if(r === 1){
        if(arr.length === 3){
            return 1
        }
        return (arr.length-1)*(arr.length-2)
    }

    const map = {}
    let count = 0

    for(const idx in arr){
        if(map[arr[idx]]){
            map[arr[idx]]++
        }
        else{
            map[arr[idx]] = 1
        }
    }

    console.log(map);

    for(const idx in arr){
        const v1 = arr[idx]
        const v2 = v1*r
        const v3 = v2*r

        if(map[v2] && map[v3]){
            count += map[v2]*map[v3]
        }
    }

    return count
}