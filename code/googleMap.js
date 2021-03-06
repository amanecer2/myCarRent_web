//-------------------------parameters-------------------------
var origin1;      var destinationA;         // for calculate
var directionsService = new google.maps.DirectionsService();
var map; 
var directionsDisplay;
var geocoder;
//-----------------------end parameters---------------------

//--------------------autocomplte--- must--be--after--load--------------------
function autocomplete()      {
		var defaultBounds = new google.maps.LatLngBounds(
			new google.maps.LatLng(-90, -180),
			new google.maps.LatLng(90, 180)
		);
       ;     // the street you want to aotucomplte-
        var options = {
            bounds: defaultBounds,
        };
		endStreetSearch = document.getElementById('destanation');          //this var is <input type="text" id="destanation">
		startStreetSearch = document.getElementById('start');			; 		// it's a global var becouse we will need it to the distance;
         var startAutocomplete = new google.maps.places.Autocomplete(startStreetSearch, options);
		var endAutocomplete = new google.maps.places.Autocomplete(endStreetSearch, options);
	}
		//----------------------end ---aotucomplte----------------------------
//----------------------------------geo------------------------------
	/*function getplace(){  // not needed becuz google direction srevices
	var lctn=document.getElementById("start").value;
	var geoCoder = new google.maps.Geocoder();
	geoCoder.geocode({ 'address': lctn,}, function(results, status) {
  if (status == google.maps.GeocoderStatus.OK) {
    map.setCenter(results[0].geometry.location);
    var marker = new google.maps.Marker({
    map: map,'title': lctn,
    position: results[0].geometry.location
  });
	}
	})
	}
	*/
//------------------------------end geo-----------------------------
//------------------------------------get location lat lng----------------------
function getLocation(){  
		navigator.geolocation.getCurrentPosition(getLatLng);
	}

	function getLatLng(position){
		lat = position.coords.latitude;
		lng = position.coords.longitude;
	}
//-----------------------------------end location lat lng-------------

//--------------------------------------display rout-----------------------------
function initialize() {
geocoder = new google.maps.Geocoder();
  directionsDisplay = new google.maps.DirectionsRenderer();
  var startLocation = new google.maps.LatLng(lat, lng);	// from the getLatLng();
  var mapOptions = {
    zoom:16,
    center: startLocation
  }
  map = new google.maps.Map(document.getElementById("mapholder"), mapOptions);    // the div of the map id="mapholder"
  directionsDisplay.setMap(map);
  calcRoute();
  calculateDistances() // for calculate the distance;
}

function calcRoute() {
  var start = startStreetSearch.value;
  var end = endStreetSearch.value;					// end and start -- value=> from the autocomplete  
  var request = {
      origin:start,
      destination:end,
      travelMode: google.maps.TravelMode.DRIVING
  };
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
    }
  });  
}
//--------------------------------------end display rout---------------

// ----------------------------------------------- culculate distance-------------------------
function calculateDistances() {
 origin1 =startStreetSearch.value;
 destinationA = endStreetSearch.value;
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
	carDistance = (results[0].distance.value/1000);  // i used carDistance as aglobal var to send it to the web worker later;
 
  //alert(carDistance+"km")				// just to see it actully working;
  toWorker(); 
  
  
}
//---------------------------- end culculate distance--------------------


