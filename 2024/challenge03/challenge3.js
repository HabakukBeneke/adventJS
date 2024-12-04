function organizeInventory(inventory) {
  if (!Array.isArray(inventory) || inventory.length === 0) return {};

  return inventory.reduce((result, { name, quantity, category }) => {
    if (!result[category]) {
      result[category] = {};
    }

    result[category][name] = (result[category][name] || 0) + quantity;
    return result;
  }, {});
}
