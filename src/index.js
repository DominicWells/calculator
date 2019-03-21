import './style.css';
import { elements } from './DOMstrings';
import * as screen from './View/screen';
import * as calculator from './Model/calculator';

// 1. current value
const calculation = {
    currentValue: '',
    currentIsOperator: true,
    decimalValue: false
};

/*
Event Listeners
 */

elements.calculationBody.addEventListener('click', e => {
    if (e.target && e.target.className === 'button') {
        const value = parseInt(e.target.closest('.button').innerHTML);
        calculation.currentValue += value;
        calculation.currentIsOperator = false;
        screen.displayFullCalculation(calculation.currentValue);
    }
});

elements.calculationBody.addEventListener('click', e => {
    if (e.target && e.target.className === 'button c') {
        const operator = e.target.closest('.c').innerHTML;

        if (operator === '.' && calculation.decimalValue === true) {
            return;
        } else if (operator === '.') {
            calculation.decimalValue = true;
        }

        if (calculation.currentIsOperator === false) {
            calculation.currentValue += operator;
            screen.displayFullCalculation(calculation.currentValue);
            calculation.currentIsOperator = true;
        } else {
            return;
        }
    }
});

// clear everything
elements.clearEverything.addEventListener('click', () => {
    calculation.currentValue = '';
    calculation.currentIsOperator = false;
    screen.clearScreen();
});

// clear last character
elements.clearLastCharacter.addEventListener('click', () => {
    calculation.currentValue = calculation.currentValue.slice(0, -1);
    screen.displayFullCalculation(calculation.currentValue);
});

// execute calculation
elements.executeCalculation.addEventListener('click', () => {
    if (calculation.currentIsOperator === false) {
        calculation.answer = calculator.executeCalculation(calculation.currentValue);
        // log answer to current operation mini-screen
        screen.displayCurrentOperation(calculation.currentValue, calculation.answer);
        calculation.currentValue = calculation.answer;
        screen.displayFullCalculation(calculation.answer);
    }
});