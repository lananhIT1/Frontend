//truy cập vào 1 thành phần html thông qua thuộc tính id và giá trị của nó
let btn1=document.getElementById('btn1');
console.log(btn1);
//truy cập vào phần tử html theo class và giá trị của nó//trả về mảng object
let btn2=document.getElementsByClassName('mybtn');
console.log(btn2[0]);
//truy cập theo tên thẻ.trả về mảng object
let btn3=document.getElementsByTagName('button');
console.log(btn3[0]);
//selector css
let mytitle=document.querySelectorAll('.title');
console.log(mytitle[0]);
/************them su kien js**************/
//1-chúng ta cần truy xuất vào phần tử HTML đó
//2-gán sự kiện, thêm sự kiện, bắt sự kiện cho phần tử đó

//3- Gán sự kiện như sau:
//3.1: 
btn1.onclick=function(){
	alert('hello world');
}
let mybtn2=document.getElementsByClassName('mybtn2');
mybtn2[0].onclick=function(){
	alert('hello');
}
//truy cap thẻ input qua class
let myinput=document.getElementsByClassName('form-control');
myinput[0].onkeydown=function(){
	let val=this.value;
	console.log(val);
}
let myBtn3=document.getElementById('btn3');
myBtn3.addEventListener('click', function(){
	//alert('hi you');
	//lay noi dung cua the h1
	let content=document.getElementsByClassName('title')[0].innerHTML;
	console.log(content);
	let content2=document.getElementsByClassName('title')[0].innerHTML='Demo PHP';
	console.log(content2);
	//truy cap vào thuộc tính
	let valclass=document.getElementById('10').id;
	console.log(valclass);
	let srcImg=document.getElementsByTagName('img')[0].src='http://media.kinhtedothi.vn/497/2018/2/5/lac-troi.jpg';
	console.log(srcImg);
	//bien the input thanh button
	document.getElementById('abc').setAttribute('type','button');
});
//bat su kien cho select theo addevent
let mychoose=document.getElementsByClassName('chooseGender');
mychoose[0].addEventListener('change',function(){
	let val1=this.value;
	if( val1==1){
		alert('bạn la nữ');
	}else{
		alert('bạn là nam');
	}
});
/**************** css trong js****************/
document.getElementById('ckl4').addEventListener('click',function(){
	let myDiv=document.getElementsByTagName('div')[0];
	//viet css cho the div
	myDiv.style.width ='500px';
	myDiv.style.height='500px';
	myDiv.style.border='1px solid red';
	myDiv.style.backgroundColor='pink';
});
/**************** BOM trong js****************/
//lay ra kích thước trình duyệt
let wB=window.innerWidth;
let hB=window.innerHeight;
console.log(` w: ${wB} and h: ${hB}`);
document.getElementById('open').onclick=function(){
	// window.open('https://www.facebook.com','Facebook','width=500,height=500');
	//reload page
	//window.location.reload(true);
	//window.location.href='https://www.facebook.com';
	let wScreen=screen.width;
	let hScreen=screen.height;
	console.log(wScreen,hScreen);
	history.forward();
}



