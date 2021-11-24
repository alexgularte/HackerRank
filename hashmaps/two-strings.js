console.log(solution('be', 'cat'))

function solution(s1, s2){
    const letters = {}

    for(const letter of s1){
        letters[letter] = 1
    }

    for(const letter of s2){
        if(letters[letter]){
            return 'YES'
        }
    }

    return 'NO'
}