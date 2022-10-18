// Exercise 1 Section

console.log("EXERCISE 1:\n==========\n");
//
function printOdds(count)
{
for (let index = 0; index < count; index++) {
    if (index % 2 != 0) {
        console.log(index, "is an odd number")
    }     
}
}


// Exercise 2 Section

console.log("EXERCISE 2:\n==========\n");
let username;
function checkAge(userName, age)
{
aboveSixteen = `Congrats ${userName}, you can drive!`;
belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;

if (age >= 16) {
    console.log(aboveSixteen);    
} else if (age < 16)  {
    console.log(belowSixteen);
} 
}



// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

function whichQuadrant(x, y) {
    if (x == 0) {
        console.log("The point is on the y axis")
    }
    if (y == 0) {
        console.log("The point is on the x axis")
    }
    if (x > 0 && y > 0) {
        console.log("The point is in Quadrant I")
    }
    if (x < 0 && y > 0) {
        console.log("The point is in Quadrant II")
    }
    if (x < 0 && y < 0) {
        console.log("The point is in Quadrant III")
    }
 
    if (x > 0 && y < 0) {
        console.log("The point is in Quadrant IV")
    }
}



// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

function triangle(a, b, c) {
    if (a + b > c && b + c > a && c + a > b) {
        console.log("This is a valid isoceles triangle.")
    }else {
        console.log("This is NOT a valid triangle.")
    }
}


// Check Text

// printOdds(43)
// checkAge("Jimminy", 14)
// checkAge("Jimminy", 19)
// whichQuadrant(0, 2)
// whichQuadrant(2, 0)
// whichQuadrant(1, 2)
// whichQuadrant(-6, 18)
// whichQuadrant(-2, -4)
// whichQuadrant(2, -2)
// triangle(1, 1, 2)
// triangle(1, 2, 2)
// triangle(45, 65, 76)
