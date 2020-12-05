'use strict'

const Pit = require('./pit.js');
const Span = require('./span.js');

class Sewer {
  constructor () {
    this.pits = new Object();
    this.spans = new Array();
  }
  newPit (number, type) {
    this.pits[number] = new Pit(type);
  }
  newSpan (point_a, point_b) {
    this.spans.push(new Span(point_a, point_b));
  }
}

module.exports = Sewer
