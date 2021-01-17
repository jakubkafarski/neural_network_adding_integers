const fs = require('fs');
const { methods, architect } = require('neataptic');
const { TRAINING_DATA_SET, FILE_NAME } = require('./constants');

function trainNeuralNetwork() {
        let network = new architect.LSTM(2,4,1);
        network.evolve(TRAINING_DATA_SET, {
                elitism: 10,
                equal: true,
                mutation: methods.mutation.ALL,
                mutationRate: 0.8,
                clear: true,
                error: 0.03,
                log: 100,
                dropout: 0.3
        });
        const toSave = network.toJSON()
        fs.writeFileSync(FILE_NAME, JSON.stringify(toSave));
}

trainNeuralNetwork()
