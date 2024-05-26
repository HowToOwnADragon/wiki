function CollapsibleTable(divId, titleId, tableId) {
    const div = document.getElementById(divId);
    div.classList.add("CollapsibleTableDiv")

    // Create the container for the title and hidebutton
    const container = document.createElement("DIV");
    container.style.display = "flex";
    container.classList.add("CollapsibleTableTitle");

    // Look for the title
    const title = document.getElementById(titleId);

    // Create a non-breaking space
    const space = document.createTextNode("\u00A0"); // &nbsp;

    // Create the hide/show button
    const hideButton = document.createElement("H6");
    hideButton.innerText = "▲";
    hideButton.classList.add("CTHideButton");
    hideButton.addEventListener('click', () => {
        tableContainer.classList.toggle("TableHidden");
        hideButton.innerText = tableContainer.classList.contains("TableHidden") ? "▼" : "▲";
    });

    // Append title and hide button to the container
    container.appendChild(title);
    container.appendChild(space);
    container.appendChild(hideButton);
    div.appendChild(container);

    // Create the table container
    const tableContainer = document.createElement('DIV');
    tableContainer.classList.add('TableShown');

    // Get the table element
    const table = document.getElementById(tableId);

    // Append the table to the table container
    tableContainer.appendChild(table);
    div.appendChild(tableContainer);
}