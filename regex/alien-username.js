console.log(solution('3\n_0898989811abced_\n_abce\n_09090909abcD0'));

function solution(input){
    input.split('\n').slice(1).forEach(str => {
        if(/^[_\.]\d+[a-zA-Z]*_?$/.test(str)){
            console.log('VALID');
        }
        else{
            console.log('INVALID');
        }
    });
}