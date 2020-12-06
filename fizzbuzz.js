const prompt = require("prompt");

// Promp handling and check if prompt is a number
let schema = {
  properties: {
    number: {
      pattern: /^[0-9]*$/,
      message: "Only number please",
      required: true,
    },
  },
};

prompt.start();
prompt.get(schema, function (err, result) {
    fizzBuzz(result.number);
});

const fizzBuzz = (number) => {
  switch (true) {
    case number % 5 == 0 && number % 3 == 0:
      console.log("FizzBuzz");
      break;
    case number % 3 == 0:
      console.log("Fizz");
      break;
    case number % 5 == 0:
      console.log("Buzz");
      break;

    default:
      console.log(number);
  }
};
