function moveit() {
	//document.getElementsByClassName('anim_shifting').style.animationDirection = "reverse";
	let info = document.getElementById('backborder');
	info.style.animationName = "shift";
	info.style.animationPlayState = "running";
	info.style.animationTimingFunction = "ease-out";
	document.getElementById("grayback").style.display = "initial";
	document.getElementById("closeX").style.display = "initial";
	
	let filtersdiv = document.getElementById('filters');
	if (filtersdiv !== null) {
		filtersdiv.setAttribute("inert", "");
		gallery.setAttribute("inert", "");
	}
}

function moveitout() {
	let info = document.getElementById('backborder');
	let rect = info.getBoundingClientRect();
	if ( rect.right < window.innerWidth ) { // Only plays exit animation if it's on-screen.
		info.style.animationName = "shiftback";
		info.style.animationPlayState = "running";
		info.style.animationTimingFunction = "ease-in";
		document.getElementById("grayback").style.display = "none";
		document.getElementById("closeX").style.display = "none";
	}
	
	let filtersdiv = document.getElementById('filters');
	if (filtersdiv !== null) {
		filtersdiv.removeAttribute("inert");
		gallery.removeAttribute("inert");
	}
}

//Clicking off the info box removes the hash.
function closeit() {
	if (typeof searchstring !== 'undefined') {
		hashname = "";
		history.replaceState("", document.title, window.location.pathname + '#?' + searchstring); //Removes the hash while maintaining stuff. Only runs when on the main page.
	}
	moveitout();
	galleryclose();
}

function about() { //Hardcoded entry exclusively for the "ABOUT" button.
	let thisImageGetsReferenced16Times = document.getElementById("image");
	thisImageGetsReferenced16Times.src = "https://cdn.discordapp.com/attachments/901206407695728660/919078708336271421/f39f1b_f8c96e98a63e4677bd0d251531026005mv2.png";
	document.getElementById("title").innerHTML = "Hello & Welcome!";
	document.getElementById("date").innerHTML = "<img src='../clock.svg'> " + "Site launched September 26th, 2022";
	document.getElementById("desc").innerHTML = "Welcome to my portfolio website! It's great to have you here. Included on this page is a sampling of some of my proudest and most recent works.<br><br>If you're an interested employer (or if you know a guy), <a href='../resume.pdf' target='_blank'>here is the latest version of my resume</a>.";
	document.getElementById("diff").innerHTML = "If you're looking to get in touch, shoot me an email at <a href='mailto:bobbyzuch1@gmail.com'>bobbyzuch1@gmail.com</a>. I'd love to hear from you!<br><br>I'm very proud to say I wrote this site by myself from the ground-up. That includes all the HTML, CSS, and Javascript. No bootstrap templates here!";
	document.getElementById("skills").innerHTML = "<b>Skills:</b> " + "I make nice eggs.";
	document.getElementById("software").innerHTML = "<b>Software:</b> " + "Anything I can get my dirty hands on!";
	document.getElementById("client").innerHTML = "Thank you for visiting!";
	document.getElementById("category").innerHTML = "Bobby Zuch!";
	
	//Checks if an iframe is currently being shown in the infobox.
	
	if ( document.getElementById("iframeouter")) {
		document.getElementById("iframeouter").style.display = "none";
		document.getElementById("iframeA").src = "";
		thisImageGetsReferenced16Times.style.display = "block";
		thisImageGetsReferenced16Times.removeAttribute("onclick");
		thisImageGetsReferenced16Times.style.cursor = "";
		thisImageGetsReferenced16Times.parentElement.removeAttribute("class");
		document.getElementById("extra").style.display = "none";
	}
	
	closeit();
	moveit();
}

function galleryclose() {
	let grayback = document.getElementById("grayback");
	let closeX2 = document.getElementById("closeX2");
	grayback.style.display = "none";
	grayback.innerHTML = ("<div id='closeX2' onclick='closeit()'><h1>X</h1></div>");
	closeX2.style.display = "none";
}

let touchstartX = 0;
let touchendX = 0;
    
function checkDirection() {
	if (touchendX < touchstartX && (touchendX - touchstartX) < -105) { nextprev(1); }
	if (touchendX > touchstartX && (touchendX - touchstartX) > 105) { nextprev(0); }
}

document.addEventListener('touchstart', e => {
	touchstartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', e => {
	touchendX = e.changedTouches[0].screenX;
	checkDirection();
});