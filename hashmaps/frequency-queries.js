console.log(solution([[1,1],[2,2],[3,2],[1,1],[1,1],[2,1],[3,2]]))

function solution(queries){
    const ocurrences = {}
    const frequences = {}

    const output = []

    for(const query of queries){
        const command = query[0]
        const param = query[1]

        if(command === 1){
            if(!ocurrences[param]){
                changeFrequece(frequences, param, 0, 1)
                ocurrences[param] = 1
            }
            else{
                changeFrequece(frequences, param, ocurrences[param], ocurrences[param] + 1)
                ocurrences[param]++
            }
        }
        else {
            if(command === 2){
                if(ocurrences[param]){
                    changeFrequece(frequences, param, ocurrences[param], ocurrences[param] - 1)
                    ocurrences[param]--
                }
            }
            else{
                if(command === 3){
                    if(frequences[param] && frequences[param].length){
                        output.push(1)
                    }
                    else{
                        output.push(0)
                    }
                }
                else{
                    console.log('ERROR')
                    return []
                }
            }            
        }

        //console.log(query);
        //console.log(ocurrences, frequences, output);
    }

    return output
}

function changeFrequece(frequences, val, oldF, newF){
    if(oldF){
        frequences[oldF] = arrayRemove(frequences[oldF], val)
    }

    if(!frequences[newF]){
        frequences[newF] = [val]
    }
    else{
        frequences[newF].push(val)
    }
}

function arrayRemove(arr, value){
    return arr.filter(v => v !== value)
}