// Links on navbar depend on authorization status

function authenticated() {
  const cookies = Object.fromEntries(document.cookie.split('; ')
      .map((c) => c.split('=')));
  const token = cookies.token;
  return token;
}


function deleteJwtCookie() {
  document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

if (authenticated()){
  console.log("True")
  const token = authenticated();
    console.log(token);

  const decodedToken = parseJwt(token)
  const username = decodedToken.username;
    console.log(username);

// display the username on the page
const usernameElement = document.getElementById('username-label');
  usernameElement.textContent = username;
  const userId = decodedToken.id_user;
  console.log(decodedToken);
  usernameElement.setAttribute('href', `users/profile.html?id=${userId}`);
  const logoutButton = document.getElementById('logout-button');
  const loginButton = document.getElementById('login-button');
  loginButton.style.visibility = 'hidden';

  logoutButton.addEventListener('click', (event) => {
    event.preventDefault();
   deleteJwtCookie();
   window.location.reload();

  });
}
else{
  const logoutButton = document.getElementById('logout-button');
  logoutButton.style.visibility = 'hidden';
    const loginButton = document.getElementById('login-button');
    loginButton.innerHTML = "Login";
    loginButton.addEventListener("click", function(){ window.location.href = `../layouts/login.html`});
    const usernameElement = document.getElementById('username-label');
  usernameElement.style.visibility = 'hidden';


}
function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}