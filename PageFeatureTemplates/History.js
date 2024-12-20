// tableGenerator.js
function generateHistory(headers, data, divId = "History") {
  const div = document.getElementById(divId);
  if (!div) {
    console.error('Div element not found');
    return;
  }

  const container = document.createElement("DIV");
  container.style.display = "flex";
  container.style.alignItems = "center";

  const title = document.createElement("H2");
  title.innerText = "History";
  title.classList.add("CollapsablElementTitle");

  // Create the hide/show button
  const hideButton = document.createElement("H6");
  hideButton.innerText = "▲";
  hideButton.classList.add("hidebutton");
  hideButton.addEventListener('click', () => {
    TableContainer.classList.toggle("historyHidden");
    hideButton.innerText = TableContainer.classList.contains("historyHidden") ? "▼" : "▲";
  });

  container.appendChild(title);
  container.appendChild(hideButton);
  div.appendChild(container);

  const TableContainer = document.createElement('DIV')
  TableContainer.classList.add('historyShown');
  const table = document.createElement('TABLE');
  TableContainer.appendChild(table);
  div.appendChild(TableContainer);

  // Generate headers
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let header of headers) {
    let th = document.createElement("th");
    th.innerText = header;
    th.style.fontSize = "14pt";
    row.appendChild(th);
  }

  // Generate rows
  let tbody = table.createTBody();
  let previousCells = [];
  for (let rowData of data) {
    let row = tbody.insertRow();
    for (let i = 0; i < rowData.length; i++) {
      if (rowData[i] !== "") {
        let cell = row.insertCell();
        cell.innerText = rowData[i];
        previousCells[i] = cell;
      } else if (previousCells[i]) {
        previousCells[i].rowSpan = (previousCells[i].rowSpan || 1) + 1;
      }
    }
  }
}