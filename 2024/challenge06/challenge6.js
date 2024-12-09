function inBox(box) {
  for (let i = 1; i < box.length - 1; i++) {
    if (/#\s*\*\s*#/.test(box[i])) {
      return true;
    }
  }
  return false;
}
