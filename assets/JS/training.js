// let instructor = "Patrick";
// let trainingCenter = "Projaro";

// console.log(instructor + " " + "is an instructor at " + trainingCenter);
// instructor = "Mr. Emmanuel";
// console.log (instructor);

// instructor = "trainingCenter";
// console.log(instructor);

// Calculatiing Area Of A Traiangle
// let breath = 12;
// let length = 10;
// let area = length * breath;

// console.log(area);

// let age = 10;
// if (age > 18) {
//     console.log("You are Welcome!");
// }else {
//     console.log("Go Away!");
// }

// A Grade Calculator
let score = prompt("Enter your score: ")
if (score > 100) {
    console.log("Error!. Score should be less than 100")
}
else if (score >= 70 && score <= 100) {
    console.log("You have grade A. Excellent!")
}else if (score >= 60 && score <= 69){
    console.log("You have grade B. Very Good!");
}else if (score >= 50 && score <= 59){
    console.log("You have grade C. Good!");
}else if (score >= 40 && score <= 49){
    console.log("You have grade D. Poor");
}else if(score <= 40) {
    console.log("You have grade F. You failed"); 
}
