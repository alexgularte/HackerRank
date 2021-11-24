console.log(solution(' /*This is a program to calculate area of a circle after getting the radius as input from the user*/\n#include<stdio.h>\nint main()\n{\n   double radius,area;//variables for storing radius and area\n   printf(\"Enter the radius of the circle whose area is to be calculated\n\");\n   scanf(\"%lf\",&radius);//entering the value for radius of the circle as float data type\n   area=(22.0/7.0)*pow(radius,2);//Mathematical function pow is used to calculate square of radius\n   printf(\"The area of the circle is %lf\",area);//displaying the results\n   getch();\n}\n/*A test run for the program was carried out and following output was observed\nIf 50 is the radius of the circle whose area is to be calculated\nThe area of the circle is 7857.1429*/'));

function solution(input){
    //or
    //const comments = input.match(/(\/\*(.|\n)*?\*\/)|(\/\/.*\n)/g)
    const comments = input.match(/(\/\*.*?\*\/)|(\/\/.*?\n)/gs)
    comments.forEach(str => {
        if(str.includes('//')){
            console.log(str.replace(/\n/g,''));
        }
        else{
            str.split('\n').forEach(s => console.log(s.trim()))
        }
    });
}