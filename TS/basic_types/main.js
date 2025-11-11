// ! Primitive and Union Types
// * 1
var userName = "Alice";
// * 2
var highScore = 100;
// * 3
var IsLoggedIn = false;
// * 4
var countdown = 10;
// ! Structured Data (Arrays and Objects)
// * 1
var gameTags = ["Action", "Adventure", "Puzzle"];
var playerScore = {
    points: 2500,
    isFinal: true,
};
// * 3
var currentScore = {
    points: 1500,
    isFinal: false,
};
// * 4
var userSetting;
// ! Section 3: Functions
// * 1
function logError(errorMessage) {
    console.error(errorMessage);
}
// * 2
function calculatePercentage(part, total) {
    if (total === 0) {
        return 0;
    }
    return (part / total) * 100;
}
// * 3
var percentage = calculatePercentage(30, 100);
console.log("Percentage: ".concat(percentage, "%"));
