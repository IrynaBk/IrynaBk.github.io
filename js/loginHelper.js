export function login(username, password) {
  fetch("http://127.0.0.1:5000/login", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return response.text().then((error) => {
              showAlert(error);
            throw new Error(error);
          });
        }
      })
      .then((data) => {
        document.cookie = `token=${data.token}; path=/`;
        window.location.href = '../index.html';
      })
      .catch((error) => {
          console.log("here")
          showAlert(error.message);
      });
}