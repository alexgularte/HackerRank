console.log(solution('7\n1050:1000:1000:a000:5:600:300c:326b\n1050:1000:2000:ab00:5:600:300c:326a\n1050:1000:3000:abc0:5:600:300c:326c\n1051:1000:4000:abcd:5:600:300c:326b\n22.231.113.64\n22.231.113.164\n222.231.113.64'));

function solution(input){
    input.split('\n').slice(1).forEach(str => {
        if(str.split('\.').length === 4){
            if(str.split('\.').map(part => /^\d{1,3}$/.test(part) && (parseInt(part) >= 0) && (parseInt(part) <= 255)).reduce((acc, val) => acc && val,true)){
                console.log('IPv4');
            }
            else{
                console.log('Neither'); 
            }
        }
        else{
            if(str.split(':').length === 8){
                if(str.split(':').map(part => /^[0-9a-f]{1,4}$/.test(part)).reduce((acc, val) => acc && val,true)){
                    console.log('IPv6');
                }
                else{
                    console.log('Neither'); 
                }
            }
            else{
                console.log('Neither');
            }
        }
    });
}