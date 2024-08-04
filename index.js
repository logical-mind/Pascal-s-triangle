function currentRow(num) {
  const row = (-1 + Math.sqrt(1 + 8 * num)) / 2;
  return row;
}
let num = [];
for (let i = 0; i <= 65; i++) {
  console.log(currentRow(i));
  if (
    i === 0 ||
    currentRow(i) % 1 === 0 ||
    (currentRow(i) % 1 !== 0 && currentRow(i + 1) % 1 === 0)
  ) {
    num.push(1);
  } else {
    num.push(
      num[i - Math.ceil(currentRow(i))] + num[i - Math.ceil(currentRow(i)) + 1]
    );
  }
}

// Html css view
function rowsHtml(num) {
  const container = document.getElementById("container");
  let index = 0;
  let numRows = 1;
  while (index < num.length) {
    const row = document.createElement("div");
    row.className = "row";
    for (let i = 0; i < numRows && index < num.length; i++) {
      const number = document.createElement("span");
      number.className = "number";
      number.textContent = num[index++];
      row.appendChild(number);
    }

    container.appendChild(row);
    numRows++;
  }
}

rowsHtml(num);
