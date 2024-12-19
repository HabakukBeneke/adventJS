function calculatePrice(ornaments) {
  const values = { "*": 1, o: 5, "^": 10, "#": 50, "@": 100 };

  let total = 0;

  for (let i = 0; i < ornaments.length; i++) {
    const current = values[ornaments[i]];
    const next = values[ornaments[i + 1]];

    if (!current) return undefined;
    total += next && current < next ? -current : current;
  }

  return total;
}
