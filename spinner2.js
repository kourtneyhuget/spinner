// taking the character and storing it in data structure
// make function to loop through data structure
// print characters that are being looped through
// set timer and incrementing

const animationChar = [
  "\r|   ",
  "\r/   ",
  "\r-   ",
  "\r\\   ",
  "\r|   ",
  "\r/   ",
  "\r-   ",
  "\r\\   ",
  "\r|   ",
];
let counter = 0;
for (let char of animationChar) {
  setTimeout(() => {
    process.stdout.write(char);
  }, counter);
  counter += 200;
}
