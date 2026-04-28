//simple program to showcase the Aysncio part of JS by Promises
let heading = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res((heading.style.color = color));
    }, delay);
  });
}

changeColor("red", 1000)
  .then((result) => {
    console.log(`Result: ${result}`);
    return changeColor("blue", 1000);
  })
  .then((result) => {
    console.log(`Result: ${result}`);
    return changeColor("yellow", 1000);
  })
  .then((result) => {
    console.log(`Result: ${result}`);
    return changeColor("brown", 1000);
  })
  .then((result) => {
    console.log(`Result: ${result}`);
  })
  .catch((error) => {
    console.log(`Error: ${error}`);
  });
