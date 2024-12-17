function compile(instructions) {
  const registers = {};

  const getValue = (x) => (isNaN(x) ? (registers[x] ??= 0) : Number(x));

  for (let pointer = 0; pointer < instructions.length; pointer++) {
    const [instruction, arg1, arg2] = instructions[pointer].split(" ");

    switch (instruction) {
      case "MOV":
        registers[arg2] = getValue(arg1);
        break;
      case "INC":
        registers[arg1] = getValue(arg1) + 1;
        break;
      case "DEC":
        registers[arg1] = getValue(arg1) - 1;
        break;
      case "JMP":
        if (getValue(arg1) === 0) pointer = Number(arg2) - 1;
        break;
    }
  }

  return registers["A"];
}
