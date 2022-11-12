class Node {
  constructor(val, left = null, right = null){
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function isValidBST(root) {
  let valid = true;
	const pending = root ? [root] : [];

	while (pending.length > 0 && valid) {
		const node = pending.shift();
		if (node.left) {
			if (node.left.val >= node.val) {
				valid = false;
				continue;
			} else {
				pending.push(node.left);
			}
		}
		if (node.right) {
			if (node.right.val <= node.val) {
				valid = false;
				continue;
			} else {
				pending.push(node.right);
			}
		}
	}
	return valid;
}

if (require.main === module) {

// add your own tests in here
const T = (v, l, r) => new Node(v, l, r)

console.log("Expecting: true");
console.log("=>", isValidBST(T(2, T(1), T(3))));

console.log("Expecting: false");
console.log("=>", isValidBST(T(5, T(1), T(4, T(3), T(6)))));

}

module.exports = {
  isValidBST,
  Node
}

// Please add your pseudocode to this file
// And a written explanation of your solution