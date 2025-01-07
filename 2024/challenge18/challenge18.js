function findInAgenda(agenda, phone) {
  const matches = [];
  const entries = agenda.split("\n");

  for (const entry of entries) {
    const phoneMatch = entry.match(/\+[-\d]+/);
    const nameMatch = entry.match(/<([^>]+)>/);

    if (!phoneMatch || !phoneMatch[0].includes(phone)) continue;

    const address = entry
      .replace(phoneMatch[0], "")
      .replace(nameMatch ? `<${nameMatch[1]}>` : "", "")
      .trim();

    matches.push({
      name: nameMatch ? nameMatch[1].trim() : "",
      address: address,
    });
  }

  return matches.length === 1 ? matches[0] : null;
}
