var arr = [];
var prev = [];
var score=0;

function checkGame() {

	for(let i=0;i<4;i++) {
		for(let j=0;j<4;j++) {
			if(arr[i][j]==2048) {
				document.getElementById("mssg").innerHTML= "You Won! Your Score: " + score;
				document.getElementById("mssg").style.color= "#2ECC71";
				document.body.removeEventListener("keyup",array);
			}
		}
	}
	let flag=1;
	for(let i=0;i<4;i++) {
		for(let j=0;j<4;j++) {
			if(arr[i][j]==0) {
				flag=0;
			}
		}
	}
	for(let i=0;i<4;i++) {
		for(let j=0;j<3;j++) {
			if(arr[i][j]==arr[i][j+1]) {
				flag=0;
			}
		}
	}
	for(let i=0;i<4;i++) {
		for(let j=0;j<3;j++) {
			if(arr[j][i]==arr[j+1][i]) {
				flag=0;
			}
		}
	}
	if(flag) {
		document.getElementById("mssg").innerHTML= "Game Over! Your Score: " + score;
		document.getElementById("mssg").style.color= "#F44336";
		document.body.removeEventListener("keyup",array);	
	}
}

function checkMove() {
	let flag=0;
	for(let i=0;i<4;i++) {
		for(let j=0;j<4;j++) {
			if(prev[i][j]!=arr[i][j]) {
				flag=1;
			}
		}
	}
	return flag;
}

function assign() {
 	for(let i=0;i<4;i++) {
		for(let j=0;j<4;j++) {
			prev[i][j]=arr[i][j];
		}
	}

 }

function rnd(min, max) {	
	return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function updateScore() {
	if(score>9999) {
		document.getElementById("score").style.fontSize = "30px" ;
	}
	document.getElementById("score").innerHTML = score;
}

function getColor(val) {
	var color = "#5D6D7E";
	switch(val) {
		case 0: 	color = "#5D6D7E"; break;
		case 2:		color = "#F6CED8"; break;
		case 4:		color = "#F7BE81"; break;
		case 8:		color = "#F3F781"; break;
		case 16:	color = "#BEF781"; break;
		case 32:	color = "#81F7D8"; break;
		case 64:	color = "#58D3F7"; break;
		case 128:	color = "#FA58F4"; break;
		case 256:	color = "#A901DB"; break;
		case 512:	color = "#01DF3A"; break;
		case 1024:	color = "#28B463"; break;
		case 2048:	color = "#D7DF01"; break;
		default:	color = "#D7DF01";
	}
	return color;
}

function display() {
	let x=0;
	for(let i=0;i<4;i++) {
		for(let j=0;j<4;j++) {
			if(arr[i][j]==0) {
				document.getElementById(x).innerHTML="";
				document.getElementById(x).style.backgroundColor = getColor(arr[i][j]);
				x++;
			}
			else {
				document.getElementById(x).innerHTML=arr[i][j];
				document.getElementById(x).style.backgroundColor = getColor(arr[i][j]);
				x++;
			}
		}
	}
}

function start() {
	document.getElementById("mssg").innerHTML= "";
	arr = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
	prev = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
	score =0 ;
	updateScore();
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
	display();
	document.body.addEventListener("keyup", array);
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
}

function array(e) {
	switch(e.key) {

		case "ArrowLeft":
				for(let i=0;i<4;i++) {
					let count=0;
					for(let j=0;j<4;j++) {
						if(arr[i][j]) {
							arr[i][count++]=arr[i][j];
						}
					}
					while(count<4) {
						arr[i][count++]=0;
					}
				}
				for(let i=0;i<4;i++) {
					for(let j=0;j<3;j++) {
						if(arr[i][j]==arr[i][j+1]) {
							arr[i][j]+=arr[i][j+1];
							score+=arr[i][j];
							for(let k=j+1;k<3;k++) {
								arr[i][k]=arr[i][k+1];
							}
							arr[i][3]=0;
						}
					}
				}
			if(checkMove()) {
				rannum();
			}
			assign();
			updateScore();
			display();
			checkGame();break;

		case "ArrowRight":
				for(let i=0;i<4;i++) {
					let count=3;
					for(let j=3;j>=0;j--) {
						if(arr[i][j]) {
							arr[i][count--]=arr[i][j];
						}
					}
					while(count>=0) {
						arr[i][count--]=0;
					}
				}
				for(let i=0;i<4;i++) {
					for(let j=3;j>0;j--) {
						if(arr[i][j]==arr[i][j-1]) {
							arr[i][j]+=arr[i][j-1];
							score+=arr[i][j];
							for(let k=j-1;k>0;k--) {
								arr[i][k]=arr[i][k-1];
							}
							arr[i][0]=0;
						}
					}
				}
			if(checkMove()) {
				rannum();
			}
			assign();
			updateScore();
			display();
			checkGame();break;

		case "ArrowUp":
				for(let i=0;i<4;i++) {
					let count=0;
					for(let j=0;j<4;j++) {
						if(arr[j][i]) {
							arr[count++][i]=arr[j][i];
						}
					}
					while(count<4) {
						arr[count++][i]=0;
					}
				}
				for(let i=0;i<4;i++) {
					for(let j=0;j<3;j++) {
						if(arr[j][i]==arr[j+1][i]) {
							arr[j][i]+=arr[j+1][i];
							score+=arr[j][i];
							for(let k=j+1;k<3;k++) {
								arr[k][i]=arr[k+1][i];
							}
							arr[3][i]=0;
						}
					}
				}
			if(checkMove()) {
				rannum();
			}
			assign();
			updateScore();
			display();
			checkGame();break;

		case "ArrowDown":
				for(let i=0;i<4;i++) {
					let count=3;
					for(let j=3;j>=0;j--) {
						if(arr[j][i]) {
							arr[count--][i]=arr[j][i];
						}
					}
					while(count>=0) {
						arr[count--][i]=0;
					}
				}
				for(let i=0;i<4;i++) {
					for(let j=3;j>0;j--) {
						if(arr[j][i]==arr[j-1][i]) {
							arr[j][i]+=arr[j-1][i];
							score+=arr[j][i];
							for(let k=j-1;k>0;k--) {
								arr[k][i]=arr[k-1][i];
							}
							arr[0][i]=0;
						}
					}
				}
			if(checkMove()) {
				rannum();
			}
			assign();
			updateScore();
			display();
			checkGame();break;

	}
}

start();
