var currentrow = 0; //Set to a number to test that row from the TSV.
var filled = 0; //For filling the gallery images only once.
var data;
//var dataOG; //So we can remove stuff from 'data' while having this as backup.

function loaddata() {
	d3.tsv("./Portfolio_Content.tsv").then(copythisdata => {
		data = copythisdata;
		//dataOG = data; Functionality disabled. This was added at the start of the redevelopment project.
		loadfromhash();
	});
}

function makehash(currentpermahash) { //Makes a hash out of the value given by the clicked HTML element.
	location.hash = currentpermahash;
}

function loadfromhash() { //Performs actions based around the number of the hash.	
	var hashname = location.hash.substring(1); //This removes the '#' from the hash referencer.
	var parsin = 0;
	while (parsin <= (data.length - 1) && (data[parsin].Permahash != hashname)) { parsin++; }
	currentrow = parsin;

	if( filled == 0 ) { //Populates the main gallery on the initial run.
		var gallery = document.getElementById("gallery");
		
		for (let i = 0; i <= (data.length - 1); i++) {
			var x = document.createElement("IMG");
			x.setAttribute("id", "imgnum" + i);
			x.setAttribute("onclick", "makehash('" + data[i].Permahash + "')");
			x.setAttribute("alt", data[i].Title);
			x.setAttribute("title", data[i].Title); //Tooltip
			x.setAttribute("src", data[i].Thumb);
			gallery.appendChild(x);
		}
		filled = 1;
		document.getElementById("getridofme").style.display = "none"; //Hides the loading text.
	}
	//The above code populates the main page with the thumbnail images from the TSV if they haven't been loaded already. It even creates the HTML elements as well!
	//Infobox populating code below:
	if (location.hash != "") { // Removes error message on blank initial load.
	document.getElementById("image").src = ""; //Quickly clear the last image before it slides in.
	document.getElementById("title").innerHTML = (data[currentrow].Title);
	document.getElementById("date").innerHTML = "<img src='./clock.svg'> " + (data[currentrow].Date);
	document.getElementById("desc").innerHTML = (data[currentrow].Info);
	document.getElementById("diff").innerHTML = (data[currentrow].Difficulties);
	document.getElementById("skills").innerHTML = "<b>Skills:</b> " + (data[currentrow].Skills);
	document.getElementById("software").innerHTML = "<b>Software:</b> " + (data[currentrow].Software);
	document.getElementById("client").innerHTML = (data[currentrow].Client);
	if (data[currentrow].Type === "img") {
		console.log("imgtime");
		document.getElementById("iframeouter").style.display = "none";
		document.getElementById("iframeA").src = "";
		document.getElementById("image").style.display = "block";
		document.getElementById("image").src = (data[currentrow].URL); }
	else if (data[currentrow].Type === "iframe") {
		console.log("iframetime");
		document.getElementById("getridofme2").style.display = "block"; //Will turn back to none after loading.
		document.getElementById("image").style.display = "none";
		document.getElementById("image").src = "";
		document.getElementById("iframeouter").style.display = "block";
		document.getElementById("iframeA").src = (data[currentrow].URL); }
	
	moveit();
	//hidenavbuttons(); Functionality disabled. Arrows were added at the start of the redevelopment project.
	}
}

/*document.addEventListener('keydown', function(event) {
	var info = document.getElementById('backborder');
	var rect = info.getBoundingClientRect();
	if ( rect.right < window.innerWidth ) {
		const key = event.key;
		switch (event.key) {
			case "ArrowLeft": nextprev(0); break;
			case "ArrowRight": nextprev(1); break;
		}
	}
});

function nextprev(direction) {
	if (direction == 1 && currentrow < data.length - 1) { makehash(data[currentrow + 1].Permahash); }
	else if (direction == 0 && currentrow > 0) { makehash(data[currentrow - 1].Permahash); }
	
	hidenavbuttons();
}

function hidenavbuttons() {
	if (currentrow >= data.length - 1) {
		document.getElementById("rightbutton").setAttribute("class", "closeXhidden");
	}
	else { document.getElementById("rightbutton").setAttribute("class", "closeX"); }
	
	if (currentrow <= 0) {
		document.getElementById("leftbutton").setAttribute("class", "closeXhidden");
	}
	else { document.getElementById("leftbutton").setAttribute("class", "closeX"); }
}*/