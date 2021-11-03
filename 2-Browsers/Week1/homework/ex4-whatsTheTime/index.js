'use strict';
/*------------------------------------------------------------------------------
1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/
function addCurrentTime() {
  // TODO complete this function
  let currentTime = new Date().toTimeString();

  const clockElement = document.createElement('p');
  document.body.appendChild(clockElement);

  clockElement.textContent = currentTime;

  setInterval(() => {
    currentTime = new Date().toTimeString();

    clockElement.textContent = currentTime;
    console.log(currentTime);
  }, 1000);
}

// TODO execute `addCurrentTime` when the browser has completed loading the page
window.addEventListener('load', addCurrentTime);
