// Relevel - Frontend Devolopment Course - JavaScript
console.clear();

//  Basic Constructs  Basic Problem Solving - Part 01

/* Given a number N in base 10, write a program to convert it into its binary form. 
Example:  
Input N=17;
Output: 10001  
*/


let convertToBinary = (num) => {
    let binaryNum = 0;
    let rem, quotient, i = 1, step = 1;

    while (num != 0) {
        rem = num % 2;
        quotient = parseInt(num/2);

        console.log(`Step: ${step} => ${num}/2, Remainder = ${rem}, Quotient = ${quotient}`);
        num = quotient;
        step++;

        binaryNum = binaryNum + rem * i;
        i = i * 10;

        console.log(`Binary Number: ${binaryNum}`);
    }
}

convertToBinary(16);
convertToBinary(17);