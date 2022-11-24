//Get value of option button for reduced motion.
let value = window.parent.document.getElementById("optionbtn2").getAttribute("onclick").substring(14).replace(/[)]/g, '');
let imgs = document.getElementsByTagName("img");

//Changes inline style.
//Uses opposite values from main -- The value is not being changed in this function.
function swapgears() {
	if (value == -2) { //Changes the selector to target everything:
		document.styleSheets[3].cssRules[1].selectorText = '*';
		imgs[0].src = "../homesvg/bg_gear_motionless.svg";
		imgs[1].src = "../homesvg/bg_gear_motionless.svg";
	}
	else { //Changes the selector to back target nothing:
		document.styleSheets[3].cssRules[1].selectorText = '.thisgetschanged';
		imgs[0].src = "../homesvg/bg_gear.svg";
		imgs[1].src = "../homesvg/bg_gear.svg";
	}
	imgs[1].setAttribute("onload", "");
}