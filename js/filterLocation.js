const adsContainer = document.getElementById("ad-container");

const locationSelect = document.getElementById("location");

locationSelect.addEventListener('change', function() {
  const selectedLocation = locationSelect.value;
  // Fetch the ads for the selected location
    if (selectedLocation==="all"){
        window.location.href = 'index.html';
    }
    else{
  fetch(`http://127.0.0.1:5000/advertisements/${selectedLocation}`)
    .then(response => response.json())
    .then(data => {
      adsContainer.innerHTML = '';

      // Clear the current ads

      output = '';
      data.forEach(ad => {output+=`
        <div id="ad-${ad.id_advertisement}" class="ad">
          <div class="content">
            <div class="title">${ad.name}</div>
            <div class="image">
              <img src="images/loading.jpg"/>
            </div>
            <div class="ad-location">
              <img src="images/pin.png"/>
              <p>${ad.location.slice(15)}</p>
            </div>
            <div class="text">
              ${ad.description.substring(0, 37)}...
            </div>
          </div>
          <a href="advertisements/advertisement.html?id=${ad.id_advertisement}" class="button det-button details">View
            details...</a>
        </div>`
      });
      adsContainer.innerHTML = output;
      if(data.length === 0){
        adsContainer.innerHTML+= `<h4 style="text-align: center; font-family: monospace;">No results</h4>
`
      }
    })
    .catch(error => console.error(error));
}});
