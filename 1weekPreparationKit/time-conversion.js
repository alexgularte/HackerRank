console.log(solution('12:01:00AM'));

function solution(input){
    const hourIn = parseInt(input.substr(0,2))

    const min = input.substr(3,2)
    const sec = input.substr(6,2)
    const isAM = input.substr(8,2) === 'AM'

    if(isAM){
        if((hourIn >= 1) && (hourIn <= 11)){
            return `${hourIn.toString().padStart(2,'0')}:${min}:${sec}`
        }

        
        return `${(hourIn-12).toString().padStart(2,'0')}:${min}:${sec}`
    }
    
    if(hourIn === 12){
        return `${hourIn.toString().padStart(2,'0')}:${min}:${sec}`
    }
    else{
        return `${(hourIn+12).toString().padStart(2,'0')}:${min}:${sec}`
    }
}