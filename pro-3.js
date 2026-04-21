function bookCab() {
  return new Promise((res, rej) => {
    let distance = Math.floor(Math.random() * 15) + 1;
    if (distance > 6) {
      res("Your cab is booked :) ");
    } else {
      rej("Cab not book, Searching for other nearby cab");
    }
  });
}

bookCab()
  .then((result) => {
    console.log("Success : ", result);
  })
  .catch((error) => {
    console.log("Sorry : ", error);
  });
