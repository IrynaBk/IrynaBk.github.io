const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const adId = urlParams.get('id');
console.log(adId)

const adDiv = document.getElementById('ad')

const uri = `http://127.0.0.1:5000/advertisements/${adId}`;

let req = new Request(uri, {
    method: 'GET',
    mode: 'cors',
    headers: {
        'Accept': 'application/json'
    }
});

fetch(req)
  .then(response => response.json())
  .then(ad => {
      let output = ''
      output+=`<div class="ad-main">
        <div class="image">
          <img src="../images/loading.jpg"/>
        </div>
        <div class="info">
          <div class="title">${ad.name}</div>
          <div class="ad-location">
            <img src="../images/pin.png"/>
            <p>${ad.location.slice(15)}</p>
          </div>
          <div class="ad-category">
            ${ad.category.name}
          </div>
          <div class="desc text">
            ${ad.description}
          </div>
        </div>
      </div>
       <div class="owner">
        <div class="verticalLine"></div>
        <div class="owner-info">
          <div class="owner icon">
          <img src="../images/person.svg"/>
        </div>
          <div class="text name">${ad.user.first_name} ${ad.user.last_name}</div>
          <button  class="det-button details">
            go to chat
          </button>
        </div>
       </div>`;

    adDiv.innerHTML = output;
  });
