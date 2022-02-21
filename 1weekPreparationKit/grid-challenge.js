console.log(solution(['ebacd', 'fghij', 'olmkn', 'trpqs', 'xywuv']));

function solution(grid){
    grid = grid.map(e => e.split('').sort((a,b) => a.charCodeAt(0) - b.charCodeAt(0)))

    for(let j = 0;j<grid[0].length;j++){
        for(let i = 1;i<grid.length;i++){
            if(grid[i][j].charCodeAt(0) < grid[i-1][j].charCodeAt(0)){
                console.log('NO');
                return
            }
        }

    }


    console.log('YES');

}