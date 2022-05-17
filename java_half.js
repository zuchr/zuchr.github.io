function moveit() {
	//document.getElementsByClassName('anim_shifting').style.animationDirection = "reverse";
	var info = document.getElementById('backborder');
	info.style.animationName = "shift";
	info.style.animationPlayState = "running";
	info.style.animationTimingFunction = "ease-out";
	document.getElementById("grayback").style.display = "initial";
	document.getElementById("closeX").style.display = "initial";
}

function moveitout() {
	var info = document.getElementById('backborder');
	var rect = info.getBoundingClientRect();
	if ( rect.right < window.innerWidth ) { // Only plays exit animation if it's on-screen.
		info.style.animationName = "shiftback";
		info.style.animationPlayState = "running";
		info.style.animationTimingFunction = "ease-in";
		document.getElementById("grayback").style.display = "none";
		document.getElementById("closeX").style.display = "none";
	}
}

//Clicking off the info box removes the hash.
function closeit() {
	history.pushState("", document.title, window.location.pathname + window.location.search); //Removes the hash while maintaining stuff like search parameters. Just in case I add search functionality in the future.
	moveitout();
	galleryclose();
}

function about() { //Hardcoded entry exclusively for the "ABOUT" button.
	document.getElementById("title").innerHTML = "Hello & Welcome!";
	document.getElementById("date").innerHTML = "<img src='../clock.svg'> " + "Site launched April 15th, 2022 (not publicly)";
	document.getElementById("desc").innerHTML = "Welcome to my portfolio website! It's great to have you here. Included on this page is a sampling of some of my proudest and most recent works.<br><br>If you're an interested employer (or if you know a guy), <a href='https://d14d47d2-2c3f-4e01-abd9-ff667189580f.filesusr.com/ugd/f39f1b_230203c803fa48928b706826a4488ec9.pdf' target='_blank'>here is the latest version of my resume</a>.";
	document.getElementById("diff").innerHTML = "If you're looking to get in touch, shoot me an email at <a href='mailto:bobbyzuch1@gmail.com'>bobbyzuch1@gmail.com</a>. I'd love to hear from you!<br><br>I'm very proud to say I wrote this site by myself from the ground-up. That includes all the HTML, CSS, and Javascript. No bootstrap templates here!";
	document.getElementById("skills").innerHTML = "<b>Skills:</b> " + "I make nice eggs.";
	document.getElementById("software").innerHTML = "<b>Software:</b> " + "Anything I can get my dirty hands on!";
	document.getElementById("client").innerHTML = "Thank you for visiting!";
	
	//Checks if an iframe is currently being shown in the infobox.
	if ( document.getElementById("iframeouter")) {
		document.getElementById("iframeouter").style.display = "none";
		document.getElementById("iframeA").src = "";
		document.getElementById("image").style.display = "block";
	}
	document.getElementById("image").src = "https://cdn.discordapp.com/attachments/901206407695728660/919078708336271421/f39f1b_f8c96e98a63e4677bd0d251531026005mv2.png";
	
	closeit();
	moveit();
}

function galleryclose() {
	var grayback = document.getElementById("grayback");
	var closeX2 = document.getElementById("closeX2");
	grayback.style.display = "none";
	grayback.innerHTML = ("<div id='closeX2' onclick='closeit()'><h1>X</h1></div>");
	closeX2.style.display = "none";
}