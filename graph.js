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
  queue.push(s);
  while (queue.length > 0) {
    var v = queue.shift();
    if (v !== undefined) {
      console.log('Visited vertex: ' + v);
    }
    for (var i = 0; i < this.adj[v].length; i++) {
      var w = this.adj[v][i];
      if (!this.marked[w]) {
        this.marked[w] = true;
        queue.push(w);
      }
    }
  }
}

module.exports = Graph;

// // tests
// g = new Graph(5);
// g.addEdge(0,1);
// g.addEdge(0,2);
// g.addEdge(1,3);
// g.addEdge(2,4);
// g.showGraph();
// // g.depthFirstSearch(0);
// g.breadthFirstSearch(0);
