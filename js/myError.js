function showAlert(message) {
  // create alert container
  const alertContainer = document.createElement('div');
  alertContainer.classList.add('alert-container');

  // create alert message element
  const alertMessage = document.createElement('div');
  alertMessage.classList.add('alert-message');
  alertMessage.innerText = message;

  // create close button element
  const closeButton = document.createElement('button');
  closeButton.classList.add('close-button');
  closeButton.innerText = 'x';
  closeButton.addEventListener('click', function() {
    alertContainer.remove();
  });

  // add message and close button to alert container
  alertContainer.appendChild(alertMessage);
  alertContainer.appendChild(closeButton);

  // add alert container to document
  document.body.appendChild(alertContainer);

  // add styling
  alertContainer.style.position = 'fixed';
  alertContainer.style.top = '20px';
  alertContainer.style.right = '20px';
  alertContainer.style.padding = '10px';
  alertContainer.style.border = '2px solid #ff0000';
  alertContainer.style.borderRadius = '5px';
  alertContainer.style.backgroundColor = '#ffeeee';
  alertMessage.style.marginRight = '10px';
  closeButton.style.border = 'none';
  closeButton.style.backgroundColor = 'transparent';
  closeButton.style.color = '#ff0000';
  closeButton.style.fontSize = '18px';
  closeButton.style.fontWeight = 'bold';
  closeButton.style.cursor = 'pointer';
}
