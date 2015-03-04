// the code for distance/ or in lat long or in word.
 onmessage = function (){

var x;
var origin1 = 'Rehovot, Israel';
var destinationA = 'givat brener, israel';
var sum;
calculateDistances();
function calculateDistances() {
  var service = new google.maps.DistanceMatrixService();
  service.getDistanceMatrix(
    {
      origins: [origin1],
      destinations: [destinationA],
      travelMode: google.maps.TravelMode.DRIVING,
      unitSystem: google.maps.UnitSystem.METRIC,
      avoidHighways: false,
      avoidTolls: false
    }, callback);
}

function callback(response, status) {
  
    var origins = response.originAddresses;
    var destinations = response.destinationAddresses;
    
    
var results = response.rows[0].elements;

	//results[0].distance.text;   // display by string the km away
	x = (results[0].distance.value/1000)*1.8;
  sum=5;
  
}

function deleteOverlays() {
  for (var i = 0; i < markersArray.length; i++) {
    markersArray[i].setMap(null);
  }
  markersArray = [];
}
var json = {"x":x,"y":sum};
postMessage(json);
}