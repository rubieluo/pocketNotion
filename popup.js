
// to do list 
(function(){
  
  var list = document.querySelector('#list'),
  form = document.querySelector('form'),
  item = document.querySelector('#item');
  
  form.addEventListener('submit',function(e){
    e.preventDefault();
    list.innerHTML += '<li>' + "- " + item.value + '</li>';
    store();
    item.value = "";
  },false)
  
  list.addEventListener('click',function(e){
    var t = e.target;
    t.parentNode.removeChild(t);
    store();
  },false)
  
  function store() {
    window.localStorage.myitems = list.innerHTML;
  }
  
  function getValues() {
    var storedValues = window.localStorage.myitems;
    if(!storedValues) {
      list.innerHTML = '';
    }
    else {
      list.innerHTML = storedValues;
    }
  }
  getValues();
})();


// weather javascript
const key = 'ec91b6e8d28f48953f0e3d427b835401';
if(key=='') document.getElementById('temp').innerHTML = ('Remember to add your api key!');

function weatherBallon( cityID ) {
	fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityID+ '&appid=' + key)  
	.then(function(resp) { return resp.json() }) // Convert data to json
	.then(function(data) {
		drawWeather(data);
	})
	.catch(function() {
		// catch any errors
	});
}
function drawWeather( d ) {
  var celcius = Math.round(parseFloat(d.main.temp)-273.15);
	var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32);
  var description = d.weather[0].description; 
	
	document.getElementById('description').innerHTML = description;
	document.getElementById('temp').innerHTML = celcius + '&deg;';
	document.getElementById('location').innerHTML = d.name;
  
  if( description.indexOf('rain') > 0 ) {
  	document.body.className = 'rainy';
    document.getElementById('icon').innerHTML = "<i class=\"weather-icon fas fa-cloud-showers-heavy fa-5x\"></i>";
  } else if( description.indexOf('cloud') > 0 ) {
  	document.body.className = 'cloudy';
    document.getElementById('icon').innerHTML = "<i class=\"weather-icon fas fa-cloud fa-5x\"></i>";
  } else if( description.indexOf('sunny') > 0 ) {
  	document.body.className = 'sunny';
    document.getElementById('icon').innerHTML = "<i class=\"weather-icon fas fa-sun fa-5x\"></i>";
  } else {
  	document.body.className = 'clear';
    document.getElementById('icon').innerHTML = "<i class=\"weather-icon fas fa-rainbow fa-5x\"></i>";
  }
}

window.onload = function() {
	weatherBallon("Waterloo,CA");
}

document.querySelector('#searchTextField').addEventListener('change', (event) => {
  weatherBallon(document.querySelector('#searchTextField').value);
});
