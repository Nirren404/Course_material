console.log("Hello, World!");

const global = "I am a global variable";

const repeatVar = () => {
  consol;
};

if (true) {
  var variableVar = " I am a var";
  console.log(variableVar);
}

console.log(variableVar);

const outer = () => {
  var counter = 0;

  const inner = () => {
    counter++;
    console.log(counter);
  };

  return inner;
};

const count = outer();

// * 1
function makeMultiplier(factor) {
  const a = 10;
  function numbers() {
    return a * factor;
  }
  return numbers();
}
console.log(makeMultiplier(2));

// * 2 (a). Create a counter() function using closures that has two methods: increment() → adds 1, reset() → sets counter back to 0.
const counter = () => {
  let count = 0;

  return {
    increment: () => {
      count++;
      return count;
    },
    reset: () => {
      count = 0;
      return count;
    },
  };
};
const myCounter = counter();
console.log(myCounter.increment());
console.log(myCounter.increment());
console.log(myCounter.increment());
console.log(myCounter.increment());
console.log(myCounter.reset());
