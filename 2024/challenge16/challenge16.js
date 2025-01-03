function removeSnow(s) {
  let regex = /(.)\1/;

  while (regex.test(s)) {
    s = s.replace(regex, "");
  }

  return s;
}
