


document.cookie = `token=; path=/`;
  const form = document.getElementById('signup-btn');

  form.addEventListener('click', (event) => {
    event.preventDefault(); // prevent form submission
    const formData = new FormData();
    formData.append("username", document.getElementById("username").value);
    formData.append("first_name", document.getElementById("first-name").value);
    formData.append("last_name", document.getElementById("last-name").value);
    formData.append("email", document.getElementById("email").value);
    formData.append("password", document.getElementById("password").value);

    const object = {};
    formData.forEach((value, key) => object[key] = value);
    const jsonData = JSON.stringify(object);
    console.log(jsonData);
  fetch("http://127.0.0.1:5000/sign-up", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: jsonData,
  })
      .then((response) => {
        if (response.ok) {
          return response.text();
        } else {
          return response.text().then((error) => {
            throw new Error(error);
          });
        }
      })
      .then((out) => {
        login(object.username, object.password);
      })
      .catch((error) => {
        console.log(error.message);
        showAlert(error.message);
      });
});
  import { login } from './loginHelper.js';