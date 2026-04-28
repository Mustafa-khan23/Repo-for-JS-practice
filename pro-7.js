let promise1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise 1 resolved after 2 seconds");
  }, 2000);
});

let promise2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise 2 resolved after 5 seconds");
  }, 5000);
});

Promise.all([promise1, promise2])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
