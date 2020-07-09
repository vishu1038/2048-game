function rnd(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function start() {
	var num=[2,4];
	var x1=rnd(1,16);
	var x2=rnd(1,16);
	while(x1==x2) {
		x2=rnd(1,16);
	}
	document.getElementById(x1).innerHTML=num[rnd(0,1)];
	document.getElementById(x2).innerHTML=num[rnd(0,1)];
}

function rannum() {
	var num=[2,4];
	var x,y;
	while(1) {
		x=rnd(1,16);
		y=document.getElementById(x).innerHTML;
		if(y=="") {
			break;
		}
	}
	y=num[rnd(0,1)];
	document.getElementById(x).innerHTML=y;
}

start();

document.body.addEventListener("keyup", function(e) {
	switch(e.key) {
		case "ArrowLeft":
			rannum();break;
		case "ArrowRight":
			rannum();break;
		case "ArrowUp":
			rannum();break;
		case "ArrowDown":
			rannum();break;

			
	}
});