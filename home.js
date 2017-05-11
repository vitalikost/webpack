/**
 * Created by ostrovskij on 27.04.2017.
 */
'use strict';


import {summa} from  './math';
import goodbye from './goodbye';

let welcome = require('./welcome');
let pifagor = require('./trigonometry').pifagor;

console.log(welcome("root!"));
console.log(goodbye("root!"));
console.log(summa(2,3));

exports.welcome = welcome;
exports.pifagor = pifagor;
export {goodbye};
export * from './math';
