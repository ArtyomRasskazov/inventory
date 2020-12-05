'use strict'

const Sewer = require('./sewer/sewer.js');

let sewer = new Sewer();
sewer.newPit('001', 'KKS-3');
sewer.newPit('002', 'KKS-3');
sewer.newPit('003', 'KKS-3');

console.log(sewer);
