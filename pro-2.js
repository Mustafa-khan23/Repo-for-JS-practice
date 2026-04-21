function checkPassword(password) {
  return new Promise((resolve, reject) => {
    if (password.length >= 8) {
      resolve("Great! you've entered a strong password");
    } else {
      reject("Password is less than 8 characters");
    }
  });
}

checkPassword("Mustafa123")
  .then((result) => {
    console.log("Success : ", result);
  })
  .catch((error) => {
    console.log("Sorry : ", error);
  });
