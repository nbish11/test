import divide from './divide.js';

const percentOf = function percentOf(percent, amount) {
    const result = divide(percent, 100) * amount;

    return result;
};

export default percentOf;
