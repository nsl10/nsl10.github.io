var Home = document.getElementById("Home");
var UpcomingEvents = document.getElementById("UpcomingEvents");
var Dining = document.getElementById("Dining");
var Lifestyle = document.getElementById("Lifestyle");
var Blog = document.getElementById("Blog");

var HomeParagraph = document.getElementById("HomeParagraph");
var UpcomingEventsParagraph = document.getElementById("UpcomingEventsParagraph");
var DiningParagraph = document.getElementById("DiningParagraph");
var LifestyleParagraph = document.getElementById("LifestyleParagraph");
var BlogParagraph = document.getElementById("BlogParagraph");

Home.addEventListener("click", pClick);
UpcomingEvents.addEventListener("click", pClick);
Dining.addEventListener("click", pClick);
Lifestyle.addEventListener("click", pClick);
Blog.addEventListener("click", pClick);


function pClick() {
	var paraId = this.attributes["data-para"].value;
	var para = document.getElementById(paraId);

	console.log(paraId);

	if (para.className === "hide") {

		HomeParagraph.className = "hide"
		UpcomingEventsParagraph.className = "hide"
		DiningParagraph.className = "hide"
		LifestyleParagraph.className = "hide"
		BlogParagraph.className = "hide"

		para.className = "";
		HomeParagraphLine.className = HomeParagraph.className
		UpcomingEventsParagraphLine.className = UpcomingEventsParagraph.className
		DiningParagraphLine.className = DiningParagraph.className
		LifestyleParagraphLine.className = LifestyleParagraph.className
		BlogParagraphLine.className = BlogParagraph.className
	}
	else {
	}
	};