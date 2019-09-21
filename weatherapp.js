window.addEventListener("load", ()=> {
	let long;
	let lat;

	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(position => {
			long = position.coords.longitude;
			lat = position.coords.latitude;
			
			const proxy = "https://cors-anywhere.herokuapp.com/";
			const api = '${proxy}https://api.darksky.net/forecast/7a932a5a33acf352e36e63f87af62440/37.8267,-122.4233';
		
		fetch(https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/7a932a5a33acf352e36e63f87af62440/37.8267,-122.4233))
			.then(response => { 
		      	return res.json();
			})
			.then(data => {
			console.log(data);
			});
		});
	}
});
