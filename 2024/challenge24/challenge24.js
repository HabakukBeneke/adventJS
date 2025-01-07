function isTreesSynchronized(tree1, tree2) {
  function isMirror(node1, node2) {
    if (!node1 && !node2) return true;
    if (!node1 || !node2 || node1.value !== node2.value) return false;
    return (
      isMirror(node1.left, node2.right) && isMirror(node1.right, node2.left)
    );
  }

  return [isMirror(tree1, tree2), tree1.value];
}
