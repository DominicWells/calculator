import { elements } from '../DOMstrings';

export const displayFullCalculation = (value) => {
    elements.displayCalculation.innerHTML = value;
};

export const displayCurrentOperation = (calculation, answer) => {
      elements.currentOperation.innerHTML = `${calculation} = ${answer}`;
};

export const clearScreen = () => {
    elements.currentOperation.innerHTML = '';
    elements.displayCalculation.innerHTML = '';
};

