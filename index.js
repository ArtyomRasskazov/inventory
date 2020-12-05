'use strict'

import Sewer from './sewer/sewer.js';

let sewer = new Sewer();
sewer.newPit('315');
console.log(sewer.pits);
