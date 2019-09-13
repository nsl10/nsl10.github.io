window.addEventListener('load', ()=> {
	let long;
	let lat;

	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(position => {
			long = position.coords.longitude;
			lat = position.coords.latitude;
		
			const api = 'https://api.darksky.net/forecast/7a932a5a33acf352e36e63f87af62440/37.8267,-122.4233';
		
		fetch(api)
			.then(response =>{
				return response.json();
			})
			.then(data => {
				console.log(data);

			});
		});
	}

});
