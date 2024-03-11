function concatenateStrings(...strings: string[]) {
  let concat: string = "";
  strings.forEach((element) => {
    concat += element;
  });
  return concat;
}

function getMaximum(...numbers: number[]) {
  return Math.max(...numbers);
}
