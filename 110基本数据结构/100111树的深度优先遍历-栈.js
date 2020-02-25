/**
* 栈方式的深度优先遍历
*/
function deepFirstSearchStack(node) {
  const stack = [node];
  while (stack.length) {
    let item = stack.pop();
    console.log(item.content);
    for (let i = item.children.length - 1; i >= 0; i--) {
      stack.push(item.children[i]);
    }
  }
}