//function with promise
function downloadFile() {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 20) + 1;
    if (internetSpeed > 8) {
      resolve("Downloading file...");
    } else {
      reject("Weak connection, try again!");
    }
  });
}

//function call with then and catch
downloadFile()
  .then((result) => {
    console.log("Success : ", result);
  })
  .catch((error) => {
    console.log("Sorry : ", error);
  });
