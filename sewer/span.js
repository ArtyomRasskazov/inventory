'use strict'

const Pipe = require('./pipe.js');

class Span {
  constructor (point_a, point_b) {
    this.point_a = point_a;
    this.point_b = point_b;
    this.pipes = new Object();
  }
  addPipe (number) {
    this.pipes.number = new Pipe();
  }
}

module.exports = Span
