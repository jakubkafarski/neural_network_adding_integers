const fs = require('fs');
const process = require('process');
const { Network } = require('neataptic');
const { FILE_NAME } = require('./constants');

if (!fs.existsSync(FILE_NAME)) {
  console.log('Error: Model ', FILE_NAME, ' does not exist');
  process.exit();
}

const model = fs.readFileSync(FILE_NAME);
const parsedModel = JSON.parse(model);
const imported = Network.fromJSON(parsedModel);

const extrapolationTests = [
  { input: [13, 13] },
  { input: [1, 5] },
  { input: [88, 2] },
  { input: [123, 100] },
  { input: [-13, 13] },
  { input: [-13, 0] },
];

extrapolationTests.forEach((set) => {
  console.log(set.input[0], ' + ', set.input[1], ' = ', Math.round(imported.activate(set.input)[0]));
});
