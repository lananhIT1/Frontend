// coment tren 1 dong cua js
/*
comment tren nhieu dong 
cu ngon ngu js
 */
// chuong trinh hello word
//document.write('<h2> Hello word </h2>');
//alert('Hi you');
//console.log('LPHP1808E');
//var myName = prompt('vui long nhap ho ten');
//console.log(myName);

// hoc ve bien va kieu du kieu trong js
var number = 10;
// kiem tra kieu du lieu cua no
console.log(typeof number);
var a;
console.log(typeof a);
let b = true;
console.log(typeof b);

const PI = 3.14;
const MY_NAME = 'ABC';
// ten bien phai viet hoa toan bo va cac tu cach nhau boi dau gach duoi
console.log(PI);
// tieu chuan - quy uoc dat ten bien trong js
//var 1abc; //sai
//let while; // sai
// quy chuan khai bao
// chu cai dau tien cua bien viet thuong - con nhung chu cai dau tien cua cac tu con lai viet hoa
let myAge = 28;
var myClass = 'PHP';

myAge =30;
console.log(myAge);
var myClass = 'JS';
console.log(myClass);

let n = 10;
let m = '10';
let t = n+m;
console.log(t);

let flag = false;
// false == '' == 0 : ve gia tri
// true == 1 : ve gia tri
if(flag === ''){
	console.log('Y');
} else {
	console.log('N');
}
// trong js bien se phan biet chu hoa va chu thong
let time;
let Time;


function Test()
{
	let number1 = 100;
	if(true){
		let number1 = 200;
		console.log(number1);
	}
	console.log(number1);
}
Test();

let checkNumber = 100;
if(checkNumber == 99){
	// do some thing
} else if(checkNumber == 97){
	// do some thing
} else if(checkNumber == 100){
	// do some thing
} else if(checkNumber == 98){
	// do some thing
} else {
	// do some thing
}

switch(checkNumber){
	case 99:
		// do some thing
		break;
	case 97:
		// do some thing
		break;
	case 100:
		// do some thing
		break;
	case 98:
		// do some thing
		break;
	default:
		// do some thing
		break;
}

for(let i = 0; i < 50; i++){
	console.log(i);
}

let stopLoop = 100;
let i = 1;
while( i < stopLoop){
	i++;
	console.log(i);
}

let j = 1;
do {
	j++;
	console.log(j);
} while(j > stopLoop);


let x = 100;
let y = 200;

x = ((y - x) > (x- y)) ? (x % y == 0 ? y : x) : y;
console.log(x);

let k = 10;
let l = 9;
let u = (k++) - (++l) + (l--) - (--k) + (k++) + (++l);
console.log(u);

/********************************************************/
/////////////////////////////////////////////////////////



// dinh nghia ham trong js
function kiemTrachanLe(a,b = 8){
	console.log(a,b);
	if(b%2 == 0){
		return true;
	}
	console.log('123');
	return false;
}
// cach su dung ham trong js
let ck = kiemTrachanLe(7,9);
if(ck){
	console.log('so chan');
} else {
	console.log('so le');
}

// viet ham kiem tra so nguyen to
function kiemTraSNT(a)
{
	if(a <= 1){
		return false;
	}
	else if(a == 2){
		return true;
	}

	for(let i = 2; i <= Math.sqrt(a); i++){
		if(a % i == 0){
			return false;
		}
	}
	return true;
}

function timBoiSoChung(a,b){
	let dem = 0;
	for (let i = 1; i <= 300 ; i++) {
		if(i % a == 0 && i % b == 0){
			dem++;
		}
	}
	return dem;
}

