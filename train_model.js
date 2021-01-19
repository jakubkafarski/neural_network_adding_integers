const fs = require('fs');
const { methods, architect } = require('neataptic');
const { TRAINING_DATA_SET, FILE_NAME } = require('./constants');

function trainNeuralNetwork() {
  const network = new architect.LSTM(2, 4, 1);
  // let network = new architect.Perceptron(2,2,1);
  // let network = new architect.GRU(2,4,1);
  // let network = new architect.NARX(2,4,1,5,5);

  const optionsLSTM = {
    elitism: 10,
    equal: true,
    mutation: methods.mutation.ALL,
    mutationRate: 0.8,
    clear: true,
    error: 0.03,
    log: 100,
    dropout: 0.3,
  };

  network.evolve(TRAINING_DATA_SET, optionsLSTM);
  const toSave = network.toJSON();
  fs.writeFileSync(FILE_NAME, JSON.stringify(toSave));
}

trainNeuralNetwork();
