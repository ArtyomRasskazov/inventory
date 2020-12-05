'use strict'

// import Span from './span.js';
// import Pit from './pit.js';

export default class Sewer {
  constructor () {
    this.pits = new Array();
    this.spans = new Array();
  }
  newPit (name) {
    this.pits.push(name);
  }
}
