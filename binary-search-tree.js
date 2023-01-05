// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    // Your code here
    this.root = null;
  }

  insert(val, currentNode=this.root) {
    // Your code here
    let node = new TreeNode(val);
    if (!this.root){  // if root is equal to null
      this.root = node; // assign the node to it

    }else{ //
      if (val > currentNode.val){ // if val is greater than the current node's value

        if(!currentNode.right){ // assign it to the right child node if it is empty
          currentNode.right = node;
        }else{
          this.insert(val, currentNode.right) // else look for an empty right node and assign it there
        }

      }else if (val < currentNode.val){ // if val is less than the current node's value

        if(!currentNode.left){ // assign it to the left child node if it is empty
          currentNode.left = node;
        }else{
          this.insert(val, currentNode.left) // else look for an empty left node and assign it there
        }

      }
    }
  }

  search(val, currentNode = this.root) {
    // Your code here

    if (!currentNode) return false; // if it has no child, return false;
    if (currentNode.val === val) return true; // if val of current node === val return true;

    if (val > currentNode.val) {

      if (!currentNode.right){ // if right node is empty, return false
        return false;
      }else{
        return this.search(val, currentNode.right); // else make a recursive call
      }

    }else if(val < currentNode.val){

      if (!currentNode.left){ // if left node is empty, return false
        return false;
      }else{
        return this.search(val, currentNode.left); // else make a recursive call
      }

    }

  }


  preOrderTraversal(currentNode = this.root) {
    // Your code here

      console.log(currentNode.val);
      if (currentNode.left) this.preOrderTraversal(currentNode.left);
      if (currentNode.right) this.preOrderTraversal(currentNode.right);

  }


  inOrderTraversal(currentNode = this.root) {
    // Your code here


      if (currentNode.left) this.inOrderTraversal(currentNode.left);
      console.log(currentNode.val);
      if (currentNode.right) this.inOrderTraversal(currentNode.right);
  }


  postOrderTraversal(currentNode = this.root) {
    // Your code here

    if (currentNode.left) this.postOrderTraversal(currentNode.left);
    if (currentNode.right) this.postOrderTraversal(currentNode.right);
    console.log(currentNode.val);
  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // your code here
    let queue = [this.root];
    while(queue.length > 0){
      let node = queue.shift();
      console.log(node.val)

      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right)
    }

  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // your code here
    let stack = [this.root];
    while(stack.length > 0){
      let node = stack.shift();
      console.log(node.val)

      if(node.left) stack.unshift(node.left);
      if(node.right) stack.unshift(node.right)
    }

}
}

module.exports = { BinarySearchTree, TreeNode };
