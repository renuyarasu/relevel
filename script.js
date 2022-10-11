// Relevel - Frontend Devolopment Course - JavaScript
console.clear();

//  Basic Constructs  Basic Problem Solving - Part 01

/* Given a number N find a pair of prime numbers whose sum is equal to N. 
Example:  
Input 5
Output: (2, 3)  
*/

let Sieve = (n, isPrime) => {
    // initialise all entries of boolean array as true
    isPrime[0] = isPrime[1] = false;

    for (let i = 2; i < n; i++) {
        isPrime[i] = true;
    }

    for (let p = 2; p * p <= n; p++) {
        if (isPrime[p] == true) {
            // update all multiples of p
            for (let i = p * p; i < n; i++) {
                isPrime[i] = false;
            }
        }
    }
    return false;
}


let FindPrimePair = (n) => {
    // generate all primes using Sieve algorithm
    let isPrime = new Array(n + 1);

    for (let i = 0; i < n; i++) {
        isPrime[i] = false;
    }
    Sieve(n, isPrime);

    // traversing all numbers to find first pair
    for (let i = 0; i < n; i++) {
        if (isPrime[i] && isPrime[n - i]) {
            console.log(i + " " + (n - i))
            return;
        }
    }
}
FindPrimePair(5); // 2 3