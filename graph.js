// Chapter 11 (Graphs and Graph Algorithms)
// Exercises:

// 1. Write a program that determines which type of graph search is 
// faster—breadthfirst or depth-first. Test your program with graphs of 
// many different sizes.

// 2. Write a program that stores a graph in a file.

// 3. Write a program that reads a graph from a file.

// 4. Build a graph that models the map of the area where you live. 
// Determine the shortest path from a starting vertex to the last vertex.

// 5. Perform a depth-first search and a breadth-first search of the graph
// created in example 4.

var Graph = function(v) {
  this.vertices = v;
  this.edges = 0;
  this.adj = [];
  for (var i = 0; i < this.vertices; i++) {
    this.adj[i] = [];
  }
  this.marked = [];
  for (var i = 0; i < this.vertices; i++) {
    this.marked[i] = false;
  }
  this.edgeTo = [];
}

Graph.prototype.addEdge = function(v, w) {
  this.adj[v].push(w);
  this.adj[w].push(v);
  this.edges++;
}

Graph.prototype.showGraph = function() {
  for (var i = 0; i < this.vertices; i++) {
    process.stdout.write(i + " -> ");
    for (var j = 0; j < this.vertices; j++) {
      if (this.adj[i][j] !== undefined) {
        process.stdout.write(this.adj[i][j] + ' ');
      }
    }
    console.log();
  }  
}

Graph.prototype.depthFirstSearch = function(v) {
  this.marked[v] = true;
  if (this.adj[v] !== undefined) {
    console.log('Visited vertex: ' + v);
  }
  for (var i = 0; i < this.adj[v].length; i++) {
    var w = this.adj[v][i];
    if (!this.marked[w]) {
      this.depthFirstSearch(w);
    }
  }
}

Graph.prototype.breadthFirstSearch = function(s) {
  var queue = [];
  this.marked[s] = true;
  queue.push(s); // add to back of queue
  while (queue.length > 0) {
    var v = queue.shift(); // remove from front of queue
    if (v !== undefined) {
      console.log('Visited vertex: ' + v);
    }
    for (var i = 0; i < this.adj[v].length; i++) {
      var w = this.adj[v][i];
      if (!this.marked[w]) {
        this.edgeTo[w] = v;
        this.marked[w] = true;
        queue.push(w);
      }
    }
  }
}

Graph.prototype.pathTo = function(source, v) {
  if (!this.hasPathTo(v)) {
    return undefined;
  }
  var path = [];
  for (var i = v; i != source; i = this.edgeTo[i]) {
    path.push(i);
  }
  path.push(source);
  return path;
}

Graph.prototype.hasPathTo = function(v) {
  return this.marked[v];
}

Graph.prototype.showPath = function(paths) {
  while (paths.length > 0) {
    if (paths.length > 1) {
      process.stdout.write(paths.pop() + '-');
    } else {
      process.stdout.write(paths.pop());
    }
  }
}

module.exports = Graph;

// tests
// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min)) + min;
// }
// var randomNum = getRandomInt(1, 1000);

// console.log('Creating a graph with ' + randomNum + ' vertices...');
// g = new Graph(randomNum);

// console.log('Add some edges to the graph...');
// for (var i = 0; i < randomNum - 1; i++) {
//   var randomNum2 = getRandomInt(0, randomNum);
//   var randomNum3 = getRandomInt(0, randomNum);
//   g.addEdge(randomNum2, randomNum3);
// };

g = new Graph(5);
g.addEdge(0,1);
g.addEdge(0,2);
g.addEdge(1,3);
g.addEdge(2,4);
// g.showGraph();

// console.log('depth-first search: ');
// g.depthFirstSearch(0);
console.log('breadth-first search: ');
g.breadthFirstSearch(0);

var vertex = 4;
var source = 0;
var paths = g.pathTo(source, vertex);
g.showPath(paths);
