function serverRequest() {
  return new Promise((resolve, reject) => {
    let responseTime = Math.floor(Math.random() * 4) + 1;
    if (responseTime <= 2) {
      resolve(`Server responds in ${responseTime}`);
    } else {
      reject(`Server Time-out ${responseTime}`);
    }
  });
}

serverRequest()
  .then((result) => {
    console.log(`Result: ${result} sec`);
  })
  .catch((error) => {
    console.log(`Error: ${error} sec`);
  });

