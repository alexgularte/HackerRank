console.log(solution(
            [41705157, 97849134, 45597343, 16768845, 22004255, 8599189, 2105694, 89992290, 67225143, 89110311],
            [13272876, 84702911, 8455586, 8597056, 131603, 80740505, 44236720, 92144494, 57795598],
            [82044489, 35357393, 83576278, 87430244, 76673809, 10617871, 83652958, 21631708]));

function solution(a, b, c){
    a = a.sort((t,w) => t-w)
    b = b.sort((t,w) => t-w)
    c = c.sort((t,w) => t-w)

    const hashA = buildHash(a,b)
    const hashC = buildHash(c,b)
    
    let count = 0

    Object.keys(hashA).forEach(k => {
        count += hashA[k]*hashC[k]
    })

    return count
}

function buildHash(a,b){
    const hash = {}

    let i = 0,j = 0

    hash[b[0]] = 0

    while((i<a.length) && (j<b.length)){
        if(a[i] <= b[j]){
            hash[b[j]]++
            i++
        }
        else{
          j++
          if(j<b.length){
            hash[b[j]] = hash[b[j-1]]
          }
        }
    }

    while(j < b.length-1){
        j++        
        hash[b[j]] = hash[b[j-1]]
    }

    return hash
}