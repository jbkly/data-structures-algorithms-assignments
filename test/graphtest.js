var expect = require('chai').expect;
var Graph = require('../graph');

describe('Graph', function() {

  var g;

  beforeEach(function() {
    g = new Graph(5);
    g.addEdge(0,1);
    g.addEdge(0,2);
    g.addEdge(1,3);
    g.addEdge(2,4);
    // g.showGraph();
  });

  it('can instantiate a new graph', function() {
    expect(g).to.be.an.instanceof(Graph);
  });

  it('starts with 5 vertices', function() {
    expect(g.vertices).to.equal(5);
  });

  it('keeps a running count of edges', function() {
    expect(g.edges).to.equal(4);
  })

  it('correctly performs a depth-first search');

  it('correctly performs a breadth-first search');

});
