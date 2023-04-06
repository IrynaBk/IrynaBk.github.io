const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const userId = urlParams.get('id');
console.log(userId)

const profileDiv = document.getElementById('user-content')

const uri = `http://127.0.0.1:5000/users/${userId}`;

let req = new Request(uri, {
    method: 'GET',
    mode: 'cors',
    headers: {
        'Accept': 'application/json'
    }
});

fetch(req)
  .then(response => response.json())
  .then(user => {
      let output = ''
      output+=`
            <div class="info">
                <h2>${user.first_name} ${user.last_name}</h2>
                <h6>@${user.username}</h6>
            </div>
            <div class="my-list">
                <a class="advertisements" href="#">My advertisements</a>
                <a class="chats" href="#">My chats</a>
            </div>
            <div class="button-container">
                <!--<button type="submit" class="btn edit">Edit</button>-->
                <a href="edit.html" class="btn btn-info edit" role="button">Edit</a>
                <button type="submit" class="btn delete">Delete</button>
            </div>
        `;

    profileDiv.innerHTML = output;
  });

function getPhotos(images) {
   images.map(image => {
      profileDiv.innerHTML += `<div class="image"><img src=${image.src.original} /></div>`;
   })
}

fetch("https://api.pexels.com/v1/search?query=person&per_page=1",{
  headers: {
    Authorization: "hSGjSG94ksbZxDu9KMjVfLO0hxshvzmzEdYSVKA6Rl3puk6wyLIJOCgu",
      Accept: "application/json"
  }
})
   .then(resp => {
     return resp.json()
   })
   .then(data => {
     getPhotos(data.photos);
   });