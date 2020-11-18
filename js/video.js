var video = document.querySelector("#myVideo");

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

//Play Button - playVideo()
document.querySelector("#play").addEventListener("click", function(){
	video.play();
	console.log("Play Video");
});
	
//Pause Button -pauseVideo()
document.querySelector("#pause").addEventListener("click", function(){
	video.pause();
	console.log("Pause Video")
});

//Mute Button - mute()
document.querySelector('#mute').addEventListener("click", function(){
	if (video.muted === false){  
		video.muted = true;
		document.getElementById('mute').innerHTML = "Unmute";
	}
	else{
		video.muted = false;
		document.getElementById('mute').innerHTML = "Mute";
	}
});

//Slow Down Button - increaseSpeed()
document.querySelector('#slower').addEventListener("click", function(){
	video.playbackRate *= 0.90;
	console.log("New Speed is ", video.playbackRate);
});

//Speed Up Button - decreaseSpeed()
document.querySelector('#faster').addEventListener("click", function(){
	video.playbackRate /= 0.90;
	console.log("New Speed is ", video.playbackRate);
});

//Volume Slider
volumeSlider = document.querySelector('#volumeSlider')
document.querySelector('#volumeSlider').addEventListener("change", function(){
	console.log(volumeSlider);
	video.volume = volumeSlider.value / 100;
	console.log(video.volume);
	document.getElementById('volume').innerHTML = (video.volume * 100) + "%";
});


//Grayscale - .oldTime
document.querySelector('#old').addEventListener("click", function(){
	video.classList.add("oldTime"); 
});

//Original Color
document.querySelector('#original').addEventListener("click", function(){
	video.classList.remove("oldTime"); 
});

//Skip forward button - advance()
document.querySelector('#skip').addEventListener("click", function(){
	if(video.currentTime + 5 >= video.duration){
		video.currentTime = 0.00;
		video.play();
		console.log("GOing back to beginning", video.currentTime)
	}
	else {
		video.currentTime += 5.00;
		console.log("Current location ", video.currentTime)
	}
});
