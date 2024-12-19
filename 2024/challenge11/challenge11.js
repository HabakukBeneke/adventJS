function decodeFilename(filename) {
  const match = filename.match(/^\d+_([\w.-]+\.[\w]+)\./);
  return match ? match[1] : null;
}
