window.addEventListener("load", ()=> {
	let long;
	let lat;
	
	let temperatureDescription = document.querySelector('.temp-description');
	let temperatureDegree = document.querySelector('.temp-degree');
	let locationTimezone = document.querySelector('.location-timezone');


	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(position => {
			long = position.coords.longitude;
			lat = position.coords.latitude;
			
			const proxy = "https://cors-anywhere.herokuapp.com/";
			const api = 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/7a932a5a33acf352e36e63f87af62440/37.8267,-122.4233';
		
		fetch(api)
			.then(response => { 
		      	return response.json();
			})
			.then(data => {
			console.log(data);
			const { temperature, summary } = data.currently;
			
			temperatureDegree.textContent = temperature;
			temperatureDescription.textContent = summary;
			locationTimezone.textContent = data.timezone;
			});
		});
	}
});
