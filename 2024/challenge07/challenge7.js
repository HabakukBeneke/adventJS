function fixPackages(packages) {
  while (packages.includes("(")) {
    packages = packages.replace(/\(([^()]+)\)/g, (match, group) => {
      return group.split("").reverse().join("");
    });
  }
  return packages;
}
