function step1() {
  return new Promise((res, rej) => {
    let success = true;
    if (success) {
      res("Step1 completed");
    } else {
      rej("Step1 Failed!");
    }
  });
}

function step2() {
  return new Promise((res, rej) => {
    let success = true;
    if (success) {
      res("Step2 completed");
    } else {
      rej("Step2 Failed!");
    }
  });
}

function step3() {
  return new Promise((res, rej) => {
    let success = true;
    if (success) {
      res("Step3 completed");
    } else {
      rej("Step3 Failed!");
    }
  });
}

step1()
  .then((result) => {
    console.log("Success : ", result);
    return step2();
  })
  .then((result) => {
    console.log("Success : ", result);
    return step3();
  })
  .then((result) => {
    console.log("Success : ", result);
  })
  .catch((error) => {
    console.log(("Failed : ", error));
  });

