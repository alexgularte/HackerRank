//console.log(check('147'));
console.log(solution('12\n(75, 180)\n(+90.0, -147.45)\n(77.11112223331, 149.99999999)\n(+90, +180)\n(90, 180)\n(-90.00000, -180.0000)\n(75, 280)\n(+190.0, -147.45)\n(77.11112223331, 249.99999999)\n(+90, +180.2)\n(90., 180.)\n(-090.00000, -180.0000)'));

function solution(str){
    str.split('\n').slice(1).forEach(s => {
      check(s)  
    })
}

function check(str){
    //if(/^(((([1-9]?[0-9])|(1[0-7][0-9]))(\.\d+)?)|(180(\.0+)?))$/.test(str)){
   // if(/^(([1-8]?[0-9](\.\d+)?)|(90(\.0+)?))$/.test(str)){

    if(/^\([\+\-]?((([1-8]?[0-9](\.\d+)?)|(90(\.0+)?))),\s[\+\-]?((((([1-9]?[0-9])|(1[0-7][0-9]))(\.\d+)?)|(180(\.0+)?)))\)$/.test(str)){
        console.log('Valid')
    }
    else{
        console.log('Invalid')
    }
}