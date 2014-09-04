// 3. Add a max() function to the BST class that finds the maximum
//  value in a BST.

// 4. Add a min() function to the BST class that finds the minimum
// value in a BST.

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
  this.min = min;
  this.max = max;
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

function min() {
  var current = this.root;
  while (current.left !== null) {
    current = current.left;
  }
  return current.data;
}

function max() {
  var current = this.root;
  while (current.right !== null) {
    current = current.right;
  }
  return current.data;
}

// 5. Write a program that stores the words from a large text file
// in a BST and displays the number of times each word occurs in 
// the text.
var largeTextString = 'aerobic dry stout shelf life bitter cask conditioning units of bitterness. autolysis original gravity primary fermentation cask conditioning, mouthfeel hydrometer lagering. rims. bottom fermenting yeast; brewhouse, copper draft (draught), bung brewpub carbonation cask conditioned ale. brew black malt abv wit aerobic attenuation malt. hop back mash lauter tun hefe pint glass lagering cold filter enzymes. infusion, mash dry stout additive, acid rest lagering, bottle conditioning. hand pump brew kettle keg. barleywine biere de garde krausen, aerobic gravity; alcohol. ipa wort barrel chocolate malt draft (draught) black malt.';
var largeTextArray = largeTextString.replace(.,).split(' ')


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
console.log('');

console.log('Number of nodes: ' + nums.countNodes(nums.root));

console.log('Minimum value: ' + nums.min());

console.log('Maximum value: ' + nums.max());
