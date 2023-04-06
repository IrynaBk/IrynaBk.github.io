document.cookie = `token=; path=/`;
  const loginButton = document.getElementById('login-btn');
  loginButton.addEventListener('click', (event) => {
    event.preventDefault(); // prevent form submission
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    login(username, password);
  });

import { login } from './loginHelper.js';