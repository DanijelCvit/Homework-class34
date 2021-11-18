'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/blob/main/3-UsingAPIs/Week2/README.md#exercise-4-dice-race

1. Complete the function `rollTheDices()` by using `.map()` on the `dices` array 
   to create an array of promises for use with `Promise.race()`.
2. Refactor the function `main()` using async/await and try/catch.
3. Once you got this working, you may observe that some dices continue rolling 
   for some undetermined time after the promise returned by `Promise.race()` 
   resolves. Do you know why? Add your answer as a comment to the bottom of the 
   file.
------------------------------------------------------------------------------*/
// ! Do not remove this line
const rollDice = require('../../helpers/pokerDiceRoller');

function rollTheDices() {
  const dices = [1, 2, 3, 4, 5];

  const promises = dices.map((dice) => rollDice(dice));

  return Promise.race(promises);
}

// Refactor this function to use async/await and try/catch
async function main() {
  try {
    const results = await rollTheDices();
    console.log('Resolved!', results);
  } catch (error) {
    console.log('Rejected!', error.message);
  }
}

main();

// ! Do not change or remove the code below
module.exports = rollTheDices;

/* Explanation:
All dices roll independently (async) of each other until each settles. The first one to settle, will
trigger resolve/reject of the promise returned by Promise.race(). Others will continue to roll until they settle.
However all resolve/reject calls to promise returned by Promise.race() by dices after the first settled one will be ignored as 
any subsequent calls to resolve/reject are always ignored in promises. */
