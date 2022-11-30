//Options buttons:
function changesetting(value) {
	//Gets the button but the last digit of the value, ignoring "-".
	let button = document.getElementById("optionbtn" + value.toString().slice(-1));
	
	//Option 1 - Yearly dividers.
	//Changes inline style.
	if (value == 1) { //Hides dividers:
		document.styleSheets[2].cssRules[2].style.display = "none";
	}
	else if (value == -1) { //Reshows dividers:
		document.styleSheets[2].cssRules[2].style.display = "block";
	}
	
	//Option 2 - Reduce motion.
	//Changes inline style.
	else if (value == 2) { //Changes the selector to target everything:
		document.styleSheets[2].cssRules[1].selectorText = '*';
		
		//When not on the main gallery:
		let filtersdiv = document.getElementById('filters');
		if (filtersdiv == null) {
			let gear1 = document.getElementById("BGgear");
			let gear2 = document.getElementById("BGgear2");
			gear1.src = "../homesvg/bg_gear_motionless.svg";
			gear2.src = "../homesvg/bg_gear_motionless.svg";
		}
	}
	else if (value == -2) { //Changes the selector to back target nothing:
		document.styleSheets[2].cssRules[1].selectorText = '.thisgetschanged';
		
		//When not on the main gallery:
		let filtersdiv = document.getElementById('filters');
		if (filtersdiv == null) {
			let gear1 = document.getElementById("BGgear");
			let gear2 = document.getElementById("BGgear2");
			gear1.src = "../homesvg/bg_gear.svg";
			gear2.src = "../homesvg/bg_gear.svg";
		}
	}
	
	
	//Positive/negative dependant changes:
	if (value > 0) {
		//button.style.backgroundColor = "var(--emerald-green)";
		button.style.opacity = "0.85";
	}
	else {
		//button.style.backgroundColor = "";
		button.style.opacity = "";
	}
	
	//Universal changes:
	button.setAttribute("onclick", "changesetting(" + (value - value*2) + ")");
	button.blur(); //Removes the focus from the button.
}