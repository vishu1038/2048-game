var arr = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];

function rnd(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function start() {
	let num=[2,4];
	let x1=rnd(1,16);
	let x2=rnd(1,16);
	while(x1==x2) {
		x2=rnd(1,16);
	}
	x1--;
	x2--;
	arr[~~(x1/4)][~~(x1%4)]=num[rnd(0,1)];
	arr[~~(x2/4)][~~(x2%4)]=num[rnd(0,1)];
	document.getElementById(x1).innerHTML=arr[~~(x1/4)][~~(x1%4)];
	document.getElementById(x2).innerHTML=arr[~~(x2/4)][~~(x2%4)];
}

function rannum() {
	let num=[2,4];
	let x,y;
	while(1) {
		x=rnd(1,16);
		x--;
		y=arr[~~(x/4)][~~(x%4)];
		if(y==0) {
			break;
		}
	}
	y=num[rnd(0,1)];
	arr[~~(x/4)][~~(x%4)]=y;
	//document.getElementById(x).innerHTML=y;
}

function display() {
	let x=0;
	for(let i=0;i<4;i++) {
		for(let j=0;j<4;j++) {
			if(arr[i][j]==0) {
				document.getElementById(x).innerHTML="";
				x++;
			}
			else {
				document.getElementById(x).innerHTML=arr[i][j];
				x++;
			}
		}
	}
}

start();

document.body.addEventListener("keyup", function(e) {
	switch(e.key) {
		case "ArrowLeft":
			
			rannum();
			display();break;
		case "ArrowRight":
			rannum();
			display();break;
		case "ArrowUp":
			rannum();
			display();break;
		case "ArrowDown":
			rannum();
			display();break;

			
	}
});