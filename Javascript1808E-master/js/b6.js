// truy cap vao 1 thanh phan html thong qua thuoc id va gia tri cua no
let btn1 = document.getElementById('btn1');
console.log(btn1);
// truy cap vao phan tu html theo class va gia tri cua no
let btn2 = document.getElementsByClassName('mybtn');
console.log(btn2[0]);
// truy cap vao phan tu htm theo ten cua the
let btn3 = document.getElementsByTagName('button');
console.log(btn3[0]);

let myTitle = document.querySelectorAll('.title');
console.log(myTitle[0]);

/************** them su kien js ************************/
// 1 - chung ta can truy xuat vao phan tu html do
// 2 - gan suj kien, them su kien, bat su kien cho phan tu do
// 3 : gan su kien nhu sau
// 3.1 : them su kien
btn1.onclick = function(){
	alert('Hello word');
}

// truy cap vao the input thong qua class cua no
let myInput = document.getElementsByClassName('form-control');

myInput[0].onkeydown = function(){
	let val = this.value;
	console.log(val);
}

//3.2 : them su kien
let myBtn3 = document.getElementById('btn3');
myBtn3.addEventListener('click',function(){
	//alert('Hi you');
	// lay noi dung cua the h1
	let content = document.getElementsByClassName('title')[0].innerHTML;
	//alert(content);
	console.log(content);

	let content2 = document.getElementsByClassName('title')[0].innerHTML = 'Demo PHP';
	console.log(content2);

	let valClass = document.getElementsByClassName('title')[0].id;

	console.log(valClass);

	let srcImg = document.getElementsByTagName('img')[0].src = 'images/abac.png';
	console.log(srcImg);

	// bien cai the input do thanh the button
	document.getElementById('abc').setAttribute('type','button');
});
// bat su kien change cho select theo addEventListener

let myGender = document.getElementsByClassName('chooseGender');

myGender[0].addEventListener('change',function(){
	let gender = this.value;
	if(gender == 1){
		console.log('Nu');
	} else if(gender == 0){
		console.log('Nam');
	} else {
		console.log('Nam + Nu');
	}
});
/********************* CSS trong JS *************************/

document.getElementById('ckl4').addEventListener('click',function(){
	let myDiv = document.getElementsByTagName('div')[0];
	// viet css cho the div nay
	myDiv.style.width = '500px';
	myDiv.style.height = '500px';
	myDiv.style.border = '1px solid red';
	myDiv.style.backgroundColor = 'pink';
});

/*************** BOM - JS *********************************/
//1 : lay ra kich thuoc cua trinh duyet
let wB = window.innerWidth;
let hB = window.innerHeight;
console.log(`w :  ${xB} and h : ${hB}`);

document.getElementById('open').onclick = function(){
	//window.open('https://www.facebook.com/','Facebook','width=200,height=200. ');
	// reload web page
	//window.location.reload(true);
	//window.location.href = 'https://www.facebook.com/';
	let wScreen = screen.width;
	let hScreen = screen.height;
	console.log(wScreen, hScreen);
	history.forward();
}




