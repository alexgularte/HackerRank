console.log(solution('ive got a lovely bunch of coconuts'.split(' '), 'ive got some coconuts'.split(' ')))

function solution(magazine, note){
    const magazineObject = {}

    magazine.forEach(word => {
        if(!magazineObject[word]){
            magazineObject[word] = 1
        }
        else{
            magazineObject[word]++
        }
        
    });

    for(const noteWord of note){
        if(!magazineObject[noteWord]){
            console.log('No')
            return
        }

        magazineObject[noteWord]--
    }

    console.log('Yes');
}