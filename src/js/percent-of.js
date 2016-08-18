import divide from './divide.js';
import multiply from './multiply.js';

const percentOf = function percentOf(percent, amount) {
    let result = 0;

    result = divide(percent, 100);
    result = multiply(result, amount);

    return result;
};

export default percentOf;
