import { elements } from "../DOMstrings";
import * as math from 'mathjs';

export const executeCalculation = (calculation) => {
    return math.eval(calculation).toString();
};