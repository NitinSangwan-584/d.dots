//----------------------------------------------back to top------------------------------------------------
const myButton = document.getElementById("myBtn");

window.onscroll = function () {
    myButton.style.display = window.scrollY > 200 ? "block" : "none";
};

function topFunction() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
//--------------------------------------- task-----------------------------------------------
//-----------------------------Q1--------------------------------------------------------------

function addThreeNumbers(a, b, c) {
    let sum = a + b + c;
    console.log("Sum is " + sum);
}

addThreeNumbers(10, 20, 30); 

//----------------------------------------------Q2--------------------------------------------

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(year + " is a leap year");
    } else {
        console.log(year + " is not a leap year");
    }
}

isLeapYear(2004); 

//--------------------------------------------------Q3------------------------------------------------

function isPalindrome(str) {
    let reversed = str.split('').reverse().join('');
    if (str === reversed) {
        console.log("String is a palindrome");
    } else {
        console.log("String is not a palindrome");
    }
}

isPalindrome("madam"); 

// -----------------------------Q4--------------------------------------

function factorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    console.log("Factorial of " + n + " is " + fact);
}

// ----------------------------------------------------Q5-------------------------------


factorial(5); 

function findLargest(numbers) {
    let max = Math.max(...numbers);
    console.log("The largest number is: " + max);
}

findLargest([12, 45, 78, 23, 89, 34]); 
