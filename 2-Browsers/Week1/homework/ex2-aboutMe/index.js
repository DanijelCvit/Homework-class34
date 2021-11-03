'use strict';
/*------------------------------------------------------------------------------
1. Using JavaScript, change the body tag's style so it has a font-family of 
   "Arial, sans-serif".
2. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
3. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
------------------------------------------------------------------------------*/

// TODO add your JavaScript code here.
function changeBodyStyle() {
  document.body.style.fontFamily = 'Arial, sans-serif';
}

function replaceSpans() {
  const spanList = document.querySelectorAll('span');
  spanList[0].replaceWith('DC');
  spanList[1].replaceWith('Hamburger');
  spanList[2].replaceWith('Rotterdam');
}

function addClassToList() {
  const list = document.querySelectorAll('li');
  for (const item of list) {
    item.classList.add('list-item');
  }
}

//1.
changeBodyStyle();
//2.
replaceSpans();
//3.
addClassToList();
