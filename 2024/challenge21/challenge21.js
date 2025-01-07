function treeHeight(tree) {
  if (!tree || typeof tree !== "object") {
    return 0;
  }

  const heightRight = treeHeight(tree.right);
  const heightLeft = treeHeight(tree.left);

  return Math.max(heightLeft, heightRight) + 1;
}
