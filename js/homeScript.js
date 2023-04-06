
const uri =  'http://127.0.0.1:5000/advertisements';

let req = new Request(uri, {
    method: 'GET',
    //mode: 'no-cors',
    headers: {
        Accept: 'application/json'
    }
});


fetch(req)
    .then((response)=> {
        console.log(response);
        if(response.ok){
            return response.json();
        }else{
            throw new Error('Bad response');
        }
    })
    .then((jsonData)=> {
        let output = ''
        jsonData.forEach(ad =>{
            output+= `
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
            ${ad.description.substring(0,37)}...
          </div>
        </div>
        <a href="advertisements/advertisement.html?id=${ad.id_advertisement}" class="button det-button details">View details...</a>
      </div>
            `
        })
        document.getElementById('ad-container').innerHTML = output;

    })
