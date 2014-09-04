// 2. Add a function to the BST class that counts the number of 
// edges in a BST

function Node(data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
  this.show = show;
}

function show() {
  return this.data;
}

function BST() {
  this.root = null;
  this.insert = insert;
  this.inOrder = inOrder;
  this.countNodes = countNodes;
}

function insert(data) {
  var n = new Node(data, null, null);
  if (this.root === null) {
    this.root = n;
  }
  else {
    var current = this.root;
    var parent;
    while (true) {
      parent = current;
      if (data < current.data) {
        current = current.left;
        if (current === null) {
          parent.left = n;
          break;
        }
      }
      else {
        current = current.right;
        if (current === null) {
          parent.right = n;
          break;
        }
      }
    }
  }
}

function inOrder(node) {
  if (node !== null) {
    inOrder(node.left);
    process.stdout.write(node.show() + ' ');
    inOrder(node.right);
  }
}

function countNodes(node) {
  if (node === null) {
    return 0;
  } else {
    return countNodes(node.left) + countNodes(node.right) + 1;
  }
}

// testing
var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
console.log("Inorder traversal: ");
nums.inOrder(nums.root);
console.log('\n');

console.log('Number of nodes: ');
console.log(nums.countNodes(nums.root));

