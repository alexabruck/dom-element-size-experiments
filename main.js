document.addEventListener("DOMContentLoaded", function() {
  createDiv1();
  createDiv2();
  createDiv3();
});

/* Solution 1: 
getBoundingClientRect & box-sizing: border-box
*/
function createDiv1() {
  const originalDiv = document.getElementById("original-div-1");
  const gBCR = originalDiv.getBoundingClientRect();
  const element = document.getElementById("repl-div-1");
  element.style.boxSizing = "border-box";
  element.style.top = gBCR.y + "px";
  element.style.left = gBCR.x + "px";
  element.style.width = gBCR.width + "px";
  element.style.height = gBCR.height + "px";
}

/* Solution 2: 
offsetTop/Left & offsetHeight/Width & box-sizing: border-box
*/
function createDiv2() {
  const originalDiv = document.getElementById("original-div-2");
  const element = document.getElementById("repl-div-2");
  const {
    offsetWidth: width,
    offsetHeight: height,
    offsetTop: top,
    offsetLeft: left
  } = originalDiv;
  element.style.boxSizing = "border-box";
  element.style.width = width + "px";
  element.style.height = height + "px";
  element.style.left = left + "px";
  element.style.top = top + "px";
}

/* Solution 3: 
offsetTop/Left + clientHeight/Width
*/
function createDiv3() {
  const originalDiv = document.getElementById("original-div-3");
  const element = document.getElementById("repl-div-3");
  const width = originalDiv.clientWidth;
  const height = originalDiv.clientHeight;
  const top = originalDiv.offsetTop;
  const left = originalDiv.offsetLeft;
  element.style.width = width + "px";
  element.style.height = height + "px";
  element.style.left = left + "px";
  element.style.top = top + "px";
}
