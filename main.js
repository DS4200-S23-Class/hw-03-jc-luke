
// increase the number of extra credit points (from 10) when the button is clicked
let currCount = 10;

function buttonClicked() {
	console.log("button was clicked");

	// select the element we want to modify
	let count = document.getElementById("count");

	let buttonDiv = document.getElementById("button-div");

	currCount = currCount + 1;

	count.innerHTML = currCount;
}



// create a function that will show and hide the surprise on click of the button
function duckClick() {

	// select the element we want to modify
	let duck = document.getElementById("duck");
	let hidden = duck.getAttribute("hidden");

	// hide image if it is showing, show image if it is hidden (ON CLICK)
	if (hidden) {
		duck.removeAttribute("hidden");
		img.innerText = "hide image"
	}
	else {
		duck.setAttribute("hidden", "hidden");
		img.innerText = "show image"
	}

	// report to console when duck button is clicked
	console.log("duck button was clicked");
}