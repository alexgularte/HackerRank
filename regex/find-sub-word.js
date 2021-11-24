console.log(solution("2\nexisting pessimist optimist this is\nfasdfa adfasd asdasdf asdfasdfas\n2\nis\nas"));

function solution(input){
    const parts = input.split('\n')
    
    const listStr = parts.slice(1, parseInt(parts[0])+1)
    const listSubwords = parts.slice(parseInt(parts[0])+2)

    listSubwords.forEach(sw => {
        let count = 0

        listStr.forEach(str => count += (str.match(new RegExp(`(?<=\\w)${sw}(?=\\w)`,'g'))||[]).length)

        console.log(count);
    });    
}