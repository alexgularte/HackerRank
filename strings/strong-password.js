console.log(solution(''));

function solution(password){
    const charUnmeetedConstraints = 
        (/\d/.test(password) ? 0 : 1) + 
        (/[a-z]/.test(password) ? 0 : 1) + 
        (/[A-Z]/.test(password) ? 0 : 1) + 
        (/[\!\@\#\$\%\^\&\*\(\)\-\+]/.test(password) ? 0 : 1)

    return Math.max(charUnmeetedConstraints, 6 - password.length)
}