let currCount = 10;

function buttonClicked() {
	console.log("button was clicked");

	// select the element we want to modify
	let count = document.getElementById("count");

	let buttonDiv = document.getElementById("button-div");

	currCount = currCount + 1;

	count.innerHTML = currCount;
}




function duckClick() {
	console.log("duck button was clicked");

	// select the element we want to modify
	let duck = document.getElementById("duck");
	let hidden = duck.getAttribute("hidden");


	if (hidden) {
		duck.removeAttribute("hidden");
		img.innerText = "hide image"
	}
	else{
		duck.setAttribute("hidden", "hidden");
		img.innerText = "show image"
	}
}