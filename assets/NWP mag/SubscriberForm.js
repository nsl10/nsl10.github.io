var SubscriberForm = document.getElementById("SubscriberForm");
var SubscriberEmail = document.getElementById("SubscriberEmail");
var SubscriberButton = document.getElementById("SubscriberButton");

function afterSubmit(e){
	e.preventDefault();

	var info = {
		Email:SubscriberEmail.value,
	};

	var url = "https://script.google.com/macros/s/AKfycbwEXqSHyrHefuGEZVNzkNP4GpwFLRX7sGYSfY0Xo1bROXsH5B0/exec"
	fetch(url,{
		method: 'POST',
		mode: 'no-cors',
		cache: 'no-cache',
		redirect: 'follow',
		body: JSON.stringify({email:"example"})
	});
	console.log("success!");
}

SubscriberForm.addEventListener("submit",afterSubmit);