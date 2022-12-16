// Initialize Map
function initMap() {
  
  // The location of Starbucks of mumbai
  const storeOne = { lat: 19.025135, lng: 72.835824 };
  const storeTwo = { lat:   19.010307214448012, lng: 72.83514918443701 }
  const storeThree = { lat:  19.025929403524476, lng: 72.8564136659764 }
  const storeFour = { lat: 19.012637406233466, lng: 72.82360781774369 }
  // The map, map object 
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 5,
    center: uluru,
  });
  // positioned of starbucks store  
  const marker = new google.maps.Marker({
    position: storeOne,    // 1st Position
    map: storeOne,
  },
  {
    position: storeTwo,  // 2nd Position
    map: storeTwo,
  },
  {
    position: storeThree,  // 3rd Position
    map: storeThree,
  },
  {
    position: storeFour,  // 4th Position
    map: storeFour,
  }
  );
}

window.initMap = initMap;

var map_parameters = {
  center: { lat: 18.97008580553988, lng: 72.81709525140658 }, zoom: 13
};
var map = new google.maps.Map(document.getElementById('map'), map_parameters);
