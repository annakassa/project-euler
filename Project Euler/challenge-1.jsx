/*Project Euler - Challenge 1 
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000. */

//create a variable that defines the range we are using for sum
let multiples = function (n) {
    //starts the sum with no previous values
        let sum = 0;
    //starts the variable in 0
        for (let i = 0; i < n; i++) {
    //if the division by 3 or 5 remainds in 0, the function will add the value to the sum
            if ((i % 3 == 0) || (i % 5 == 0)) {
                sum += i;
            }
        }
        console.log(sum);
    };
    
    
    multiples(1000);
