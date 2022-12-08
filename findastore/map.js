// Initialize Map
function initMap() {
  
  // The location of Starbucks of mumbai
  const storeOne = { lat: 19.025135, lng: 72.835824 };
  const storeTwo = { lat:   19.010307214448012, lng: 72.83514918443701 }
  const storeThree = { lat:  19.025929403524476, lng: 72.8564136659764 }
  const storeFour = { lat: 19.012637406233466, lng: 72.82360781774369 }
  // The map, adding maps and id from dom
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 5,
    center: uluru,
  });
  // positioned at starbucks coffe 
  const marker = new google.maps.Marker({
    position: storeOne
    map: storeOne,
  },
  {
    position: lat,  // 2nd marker
    map: lag,
  },
  {
    position: lat,  // 3rd marker
    map: lag,
  },
  {
    position: lat,  // 4th marker
    map: lag,
  }
  );
}

window.initMap = initMap;

var map_parameters = {
  center: { lat: 18.97008580553988, lng: 72.81709525140658 }, zoom: 13
};
var map = new google.maps.Map(document.getElementById('map'), map_parameters);
