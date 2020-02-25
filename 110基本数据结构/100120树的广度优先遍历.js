/**
* 树的广度优先遍历
*/
function breadthFirstSearch(node) {
  const queue = [node];
  while (queue.length) {
    const item = queue.shift();
    console.log(item.content);
    for (let i = 0; i < item.children.length; i++) {
      queue.push(item.children[i]);
    }
  }
}