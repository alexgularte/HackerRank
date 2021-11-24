console.log(solution('1\nfoo bar (foo) bar foo-bar foo_bar foo\'bar bar-foo bar, foo.\n1\nfoo'));

function solution(input){
    const parts = input.split('\n')
    const numberOfSentences = parseInt(parts[0])
    
    const sentences = parts.slice(1,numberOfSentences+1)
    const words = parts.slice(numberOfSentences+2)

    words.forEach(word => {
        let count = 0

        sentences.forEach(sentence => {
            count += (sentence.match(RegExp(`\\b${word}\\b`,'g')) || []).length
        })

        console.log(count);
    });

}