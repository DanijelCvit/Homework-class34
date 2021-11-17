'use strict';
/*------------------------------------------------------------------------------
Rewrite this function, but replace the callback syntax with the Promise syntax:
- Have the `getAnonName` function return a `new Promise`.
- If the Promise `resolves`, pass the full name as an argument to resolve with.
- If the Promise `rejects`, pass an error as the argument to reject with: "You 
  didn't pass in a first name!"
------------------------------------------------------------------------------*/
// TODO see above
function getAnonName(firstName) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (!firstName) {
        reject(new Error("You didn't pass in a first name!"));
      }
      const fullName = `${firstName} Doe`;
      resolve(fullName);
    }, 1000);
  });
}

const promise = getAnonName('John');
promise.then(
  (result) => console.log(result),
  (error) => console.log(error)
);

// ! Do not change or remove the code below
module.exports = getAnonName;
