const prompt = require("prompt");

// Promp handling and check if prompt is a number
let schema = {
  properties: {
    number: {
      pattern: /^[0-9]*$/,
      message: "Please type a positive  number",
      required: true,
    },
  },
};

prompt.start();
prompt.get(schema, function (err, result) {
  incrementArray(result.number);
});



// Function to increment array of digit by 1
const incrementArray = (number) => {
  // Number to array of digits
  const arrayDigit = number.split("");

  let retenue = 0;

  // Number  NOT finishing by 9
  if (arrayDigit[arrayDigit.length - 1] != 9) {
    arrayDigit[arrayDigit.length - 1]++;
    return console.log("result : ", arrayDigit);

    // Number finishing by 9
  } else {
    retenue = 1;
    for (let i = arrayDigit.length - 1; i >= 0; i--) {
      //Digit finishing by 9
      if (arrayDigit[i] == 9) {
        arrayDigit[i] = 0;

        // Digit NOT finishing by 9
      } else {
        if (retenue === 1) {
          arrayDigit[i]++;
          retenue = 0;
        } else {
          return console.log("result :", arrayDigit);
        }
      }
      // Add a digit for numbers like 99,999,9999
      if (i == 0 && retenue === 1) {
        arrayDigit.unshift(1);
      }
    }
  }
  return console.log("result :", arrayDigit);
};
