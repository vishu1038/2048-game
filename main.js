var arr = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
var prev =  [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];

function check() {
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
							for(let k=j+1;k<3;k++) {
								arr[i][k]=arr[i][k+1];
							}
							arr[i][3]=0;
						}
					}
				}
			if(check()) {
				rannum();
			}
			assign();
			display();break;

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
							for(let k=j-1;k>0;k--) {
								arr[i][k]=arr[i][k-1];
							}
							arr[i][0]=0;
						}
					}
				}
			if(check()) {
				rannum();
			}
			assign();
			display();break;

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
							for(let k=j+1;k<3;k++) {
								arr[k][i]=arr[k+1][i];
							}
							arr[3][i]=0;
						}
					}
				}
			if(check()) {
				rannum();
			}
			assign();
			display();break;

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
							for(let k=j-1;k>0;k--) {
								arr[k][i]=arr[k-1][i];
							}
							arr[0][i]=0;
						}
					}
				}
			if(check()) {
				rannum();
			}
			assign();
			display();break;

	}
});