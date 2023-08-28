const partsList = JSON.parse(localStorage.getItem('partsList')) || [];

const submitButton = document.querySelector('.js-submit-button');
const ticketInputElement = document.querySelector('.js-ticket-number');
const partNumberInput = document.querySelector('.js-part-number');
const partDescriptionInput = document.querySelector('.js-part-description');
const qtyInput = document.querySelector('.js-part-qty-input');
const partStatusInput = document.querySelector('.js-part-status-input');
const outputElement = document.querySelector('.js-output-text');

// Function to render parts list from localStorage
function renderPartsList() {
  outputElement.innerHTML = ''; // Clear the existing content

  partsList.forEach(part => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
    <div class="text-output-container">
        <span class="ticket-number-output">${part.ticketNumber}  </span>
        <span class="part-number-output">${part.partNumber}  </span>  
        <span class="part-description-output">${part.partDescription}  </span>
        <span class="qty-output">${part.qtyPart}  </span>
        <span class="part-status-output">${part.partStatus}</span>
        <button class="delete-button js-delete-button">Delete</button>
    </div>
    `;

    outputElement.appendChild(listItem);

    const deleteButton = listItem.querySelector('.js-delete-button');
    deleteButton.addEventListener('click', () => {
      outputElement.removeChild(listItem);
      partsList.splice(partsList.indexOf(part), 1);
      saveToStorage();
    });
  });
}

// Initial rendering of parts list on page load
renderPartsList();

submitButton.addEventListener('click', () => {
  const ticketNumberValue = ticketInputElement.value;
  const partNumberValue = partNumberInput.value;
  const partDescriptionValue = partDescriptionInput.value;
  const qtyPartValue = qtyInput.value;
  const partStatusValue = partStatusInput.value;

  const part = {
    ticketNumber: ticketNumberValue,
    partNumber: partNumberValue,
    partDescription: partDescriptionValue,
    qtyPart: qtyPartValue,
    partStatus: partStatusValue
  };

  partsList.push(part);

  renderPartsList(); // Update the displayed list

  resetInputFields();

  saveToStorage();
});

function resetInputFields() {
  ticketInputElement.value = '';
  partNumberInput.value = '';
  partDescriptionInput.value = '';
  qtyInput.value = '';
  partStatusInput.value = '';
}

function saveToStorage() {
  localStorage.setItem('partsList', JSON.stringify(partsList));
}

