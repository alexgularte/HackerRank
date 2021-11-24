console.log(solution('aa'));

function solution(s){
    let i = 0
    let deletions = 0

    s = s.split('')

    while(true){
        if(i >= s.length){
            if(deletions === 0){
                return s.length === 0 ? 'Empty String': s.join('')
            }
            else{
                i = 0
                deletions = 0
            }
        }
        else{
            if(s[i] === s[i+1]){
                s.splice(i,2)
                deletions++
            }
    
            i++
        }
    }
}