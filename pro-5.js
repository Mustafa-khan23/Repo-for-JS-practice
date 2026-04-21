function flipCoin() {
  return new Promise((resolve, reject) => {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    if (randomNumber > 5) {
      resolve("Heads");
    } else {
      reject("Tails");
    }
  });
}

flipCoin()
  .then((result) => {
    console.log(`Result: ${result}`);
  })
  .catch((error) => {
    console.log(`Result: ${error}`);
  });
