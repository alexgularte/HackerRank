console.log(solution('4\nI love #hackerrank\nI just scored 27 points in the Picking Cards challenge on #HackerRank\nI just signed up for summer cup @hackerrank\ninteresting talk by hari, co-founder of hackerrank'));

function solution(input){
    console.log(input.split('\n').splice(1).filter(tweet => /hackerrank/i.test(tweet)).length);
}