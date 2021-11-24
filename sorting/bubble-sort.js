console.log(solution([6,4,1]))

function solution(a){
    let countSwaps = 0

    for(let i = 0;i<a.length;i++){
        for(let j = 0; j<a.length-1;j++){
            if(a[j] > a[j+1]){
                swap(a, j, j+1)
                countSwaps++
            }
        }
    }

    console.log(`Array is sorted in ${countSwaps} swaps.`);
    console.log(`First Element: ${a[0]}`);
    console.log(`Last Element: ${a[a.length-1]}`);
}

function swap(a, i, j){
    const temp = a[i]
    a[i] = a[j]
    a[j] = temp
}