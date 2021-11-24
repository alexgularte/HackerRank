// console.log(solution([
//     [ 2, 3 ],   [ 4, -1 ],
//     [ 5, -1 ],  [ 6, -1 ],
//     [ 7, 8 ],   [ -1, 9 ],
//     [ -1, -1 ], [ 10, 11 ],
//     [ -1, -1 ], [ -1, -1 ],
//     [ -1, -1 ]
//   ], [ 2, 4 ]))

console.log(solution([
    [ 2, 3 ],   [ 4, 5 ],
    [ 6, -1 ],  [ -1, 7 ],
    [ 8, 9 ],   [ 10, 11 ],
    [ 12, 13 ], [ -1, 14 ],
    [ -1, -1 ], [ 15, -1 ],
    [ 16, 17 ], [ -1, -1 ],
    [ -1, -1 ], [ -1, -1 ],
    [ -1, -1 ], [ -1, -1 ],
    [ -1, -1 ]
  ],
  [ 2, 3 ]));
//14 8 5 9 2 4 13 7 12 1 3 10 15 6 17 11 16
function solution(indexes, queries){
    const tree = buildTree(indexes)
    const rootNode = tree.rootNode
    const nodePerDepth = tree.nodePerDepth

    const arr = []

    //arr.push(buildInOrderArray(rootNode))
    //printInOrder(rootNode)

    queries.forEach(q => {
        _swapNodes(nodePerDepth, q)
        arr.push(buildInOrderArray(rootNode))
    })
    
    return arr
}

function _swapNodes(nodePerDepth, k){
    nodePerDepth.forEach((nodes, idx) => {
        if((idx+1)%k === 0){
            nodes.forEach(node => {
                const aux = node.right
                node.right = node.left
                node.left = aux
            })
        }
    })
}

function buildTree(values){
    const rootNode = {
        value: 1
    }

    const nodePerDepth = [[rootNode],[]]

    let currentDepth = 1
    let currentLeaf = 0

    values.forEach(v => {
        let node = nodePerDepth[currentDepth-1][currentLeaf]

        if(!node || !node.value){
            currentDepth++
            currentLeaf = 0

            nodePerDepth[currentDepth] = []
            while((!nodePerDepth[currentDepth-1][currentLeaf] || !nodePerDepth[currentDepth-1][currentLeaf].value) && (currentLeaf < nodePerDepth[currentDepth-1].length)){
                currentLeaf++
            }
            node = nodePerDepth[currentDepth-1][currentLeaf]
        }

        node.left = v[0] > 0 ?{value: v[0]}:{}
        node.right = v[1] > 0 ? {value: v[1]}:{}

        nodePerDepth[currentDepth].push(node.left)
        nodePerDepth[currentDepth].push(node.right)

        currentLeaf++

        while((!nodePerDepth[currentDepth-1][currentLeaf] || !nodePerDepth[currentDepth-1][currentLeaf].value) && (currentLeaf < nodePerDepth[currentDepth-1].length)){
            currentLeaf++
        }
        
        // console.log('----------------------------------------------------------------')
        // console.log(v);
        // console.log(printInOrder(rootNode));
        // printNodePerDepth(nodePerDepth)
    });
    
    return {rootNode, nodePerDepth}
}

function printNodePerDepth(nodePerDepth){
    nodePerDepth.map(depth => depth.map(node => node.value)).forEach((depth, idx) => {
        console.log(`${idx} => ${depth.map(n => n || -1)}`);
    })
}

function buildInOrderArray(node, arr=[]){
    if(node.left){
        buildInOrderArray(node.left, arr)
    }

    if(node.value){
        arr.push(node.value)
    }

    if(node.right){
        buildInOrderArray(node.right, arr)
    }

    return arr
}

function printInOrder(node){
    if(node.left){
        printInOrder(node.left)
    }

    if(node.value){
        console.log(`[${node.value}] L: ${node.left?.value} R: ${node.right?.value}`);
    }

    if(node.right){
        printInOrder(node.right)
    }
}