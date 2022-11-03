var video;

//page load
window.addEventListener("load", function() {
	//console.log from from default file
	console.log("Good job opening the window")
	//initialize video element (id='player1')
	video = document.querySelector("#player1");
	//turn off autoplay
	video.autoplay = false;
	//turn off looping
	video.loop = false;
});

//play button
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	//play video
	video.play();
	//update volume information
	var volume = document.querySelector("#slider").value; 
	document.querySelector("#volume").innerHTML =  volume + "%";
});

//pause button
document.querySelector("#pause").addEventListener("click", function() {
	//pause the video
	video.pause();
});

//slow down
document.querySelector("#slower").addEventListener("click", function() {
	//slow speed by 10% each time button is clicked
	video.playbackRate *= .9;
	//log the new speed to the console
	console.log("New speed is " + video.playbackRate);
});

//speed up
document.querySelector("#faster").addEventListener("click", function(){
	//increase speed by 10% each time button is clicked
	video.playbackRate *= 1.1;
	//log the new speed to the console
	console.log("Speed is " + video.playbackRate);
});

//skip ahead
document.querySelector("#skip").addEventListener("click", function(){
	//if video length has been exceeded go back to the start of the video
	if (video.currentTime + 10 > video.duration) {
		video.currentTime = 0;
	} 
	//advance current video by 10 seconds
	else {
		video.currentTime += 10;
	}
	//log the current location of the video
	console.log("Current video time is " + video.currentTime);
});

//mute
document.querySelector("#mute").addEventListener("click", function(){
	//logic for whether video IS muted
	if (video.muted) {
		//set to not muted
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
	} 
	//logic for whether video IS NOT muted
	else {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
	}
});

//volume slider
document.querySelector("#slider").addEventListener("click", function(){
	//change video object based on slider
	video = document.querySelector("#player1"); 
	//update volume information
	video.volume = this.value / 100;
	document.querySelector("#volume").innerHTML =  video.volume * 100 + "%";
});

//styled
document.querySelector("#vintage").addEventListener("click", function(){
	//utilize the EXISTING oldSchool class on the video element using 'add'
	video.classList.add("oldSchool");
});

//original
document.querySelector("#orig").addEventListener("click", function(){
	//remove the oldSchool class from the video using 'remove'
	video.classList.remove("oldSchool");
});