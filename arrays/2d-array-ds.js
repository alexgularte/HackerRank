console.log(solution(
    [
        [-9, -9, -9,  1, 1, 1 ],
        [0, -9,  0,  4, 3, 2],
        [-9, -9, -9,  1, 2, 3],
        [0,  0,  8,  6, 6, 0],
        [0,  0,  0, -2, 0, 0],
        [0,  0,  1,  2, 4, 0 ] 
    ]
));

function solution(arr){
    const hourGlasses = []

    for(let i = 1;i<=4;i++){
        for(let j = 1;j <= 4; j++){
            hourGlasses.push(
                arr[i-1][j-1]+arr[i-1][j]+arr[i-1][j+1] +
                arr[i][j]+
                arr[i+1][j-1]+arr[i+1][j]+arr[i+1][j+1]
            )
        }
    }

    return hourGlasses.reduce((acc,val) => val > acc ? val : acc, hourGlasses[0])
}