console.log(solution('Ciphering.',26))

function solution(s, k){
    if(k > 26){
        k = k%26
    }

    return s.split('').map(char => {
        let charCode = char.charCodeAt(0)

        if((charCode >= 65) && (charCode <= 90)){
            charCode += k
            if(charCode > 90){
                charCode -= 26
            }
            return String.fromCharCode(charCode)
        }


        if((charCode >= 97) && (charCode <= 122)){
            charCode += k
            if(charCode > 122){
                charCode -= 26
            }
            return String.fromCharCode(charCode)
        }

        return char
    }).join('')
}