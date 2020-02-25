/**
* 树的深度优先遍历
*/
function deepTraversal(node) {
  console.log(node.content);
  for (let i = 0; i < node.children.length; i++) {
    deepTraversal(node.children[i]);
  }
}