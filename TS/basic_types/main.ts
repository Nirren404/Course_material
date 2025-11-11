// ! Primitive and Union Types

// * 1
let userName: string = "Alice";

// * 2
let highScore: number = 100;

// * 3
let IsLoggedIn: boolean = false;

// * 4
let countdown: number | null = 10;

// ! Structured Data (Arrays and Objects)

// * 1
let gameTags: string[] = ["Action", "Adventure", "Puzzle"];

// * 2
type Score = {
  points: number;
  isFinal: boolean;
};

let playerScore: Score = {
  points: 2500,
  isFinal: true,
};

// * 3
let currentScore: Score = {
  points: 1500,
  isFinal: false,
};

// * 4
let userSetting: string | undefined;

// ! Section 3: Functions

// * 1
function logError(errorMessage: string): void {
  console.error(errorMessage);
}

// * 2
function calculatePercentage(part: number, total: number): number {
  if (total === 0) {
    return 0;
  }
  return (part / total) * 100;
}

// * 3
let percentage: number = calculatePercentage(30, 100);
console.log(`Percentage: ${percentage}%`);
