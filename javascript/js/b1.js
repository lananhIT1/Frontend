//comment trên 1 dòng của js
/* comment trên nhiều dòng của js*/
//chương trình hello word
//document.write('<h2>hello word</h2>');
//alert('hi you');
//console.log('LPHP');
//var myName = prompt('vui long nhap ho ten');
//console.log(myName);
//bien va kieu du lieu trong js
var number=10;
//kiemtra kieu du lieu
console.log(typeof number);
var a;
console.log(typeof a);
let b=true;
console.log(typeof b);
const PI=3.14;
const MY_NAME='ABC';
//TEN BIEN VIET HOA CACH NHAU DAU GACH DUOI
//tieu chuan- quy uoc dat ten bien trong js
//var 1abc;//sai
//let break;//ten bien ko trung tu khoa-sai
//qui chuan khai bao
//chu cai dau tien cua bien viet thuong con nhung chu cai dau tien cua cac tu con lai viet hoa
let myAge=28;
var myClass='PHP';
myAge =30;
console.log(myAge);
var myClass='JS';
console.log(myClass);

let n=10;
let m='10';
let t=n-m;//khong cung kieu du lieu thi phep noi chuoi uu tien +; -*/ vaaxn bt khi no la chuoi so

console.log(t);
let flag=false;
//FALSE==''==0 : VE GIA TRI
//TRUE==1 VE GIA TRI
if(flag ===''){///=== SO SANH GIA TRI VA KIEU DU LIEU
	console.log('Y');
}else{
	console.log('N');
}
//trong js bien se phan biet chu hoa chu thuong
let time;
let Time;
let checkNumber = 100;
if(checkNumber ==99){
	// do domething
}
else if(checkNumber == 97){
	//do something
} else if(checkNumber == 100)
{

}
else{
}
switch(checkNumber){
	case 99:
	//do some thing
		break;
	case 97:
	//dosomething
		break;
	case 100:
	//do some thing
		break;
	case 98:
	//do sone thing
		break;
	default:
		//do something
		break;

}
for(let i=0;i<50;i++){
	console.log(i);
}
let i=1;
let stopLoop =100;
while(i< stopLoop){
	 i++;
	console.log(i);
}
let j=1;
do{
	j++;
	console.log(j);
}while(j> stopLoop);
let x=100;
let y=200;
x=((y-x)>(x-y))? (x % y ==0? y:x):y;
console.log(x);
let k=10;
let l=9;
let u=(k++) - (++l) + (l--) - (--k) + (k++) + (++l);
/////////////////////////////////////////////
/**********************************************/
//dinh ghia ham trong js
function kiemTrachanLe(a,b=8){
	console.log(a,b);
	if(b%2==0){
		return true;//tra ve gia tri cho ten ham, ngat ko thuc thi cau lenh ben duoi
	}
	console.log('123');
	return false;
}
//cach su dung ham
let ck = kiemTrachanLe(7,9);//ton tai tham so thuc 
if(ck){
	console.log('sochan');
}
else{
	console.log('so le');
}
//viet ham ktra so nguyen to
function kiemTranguyenTo(a){
	if(a<=1){
		return false;
	}
	 else if(a==2){
		return true;
	}
	for(var i=2;i<= Math.sqrt(a);i++){
		if(a%i==0){
			return  false;
		}
	}
	return true;
}
// var dem=0;
// function dem(a,b) {
// 	for(var i=1;i<=300;i++){
// 		if(i%a==0&&i%b==0){
// 			dem++;
// 		}
// 	}
// 	return dem;
// }
// let ck2=dem(2,3);
// console.log(ck2);
// var Dx=0,Dy=0,D=0,x=0,y=0;
function giai(a1,b1,c1,a2,b2,c2){
	if((a1*a1)+(b1*b1)!=0 && (a2*a2)+(b2*b2)!=0){
		var D=a1*b2-a2*b1;
		 var Dx=c1*b2-c2*b1;
		 var Dy=a1*c2-a2*c1;
		if(D!=0){
			x=Dx/D;
			console.log(x);
			y=Dy/D;
			console.log(y);
		}
		if(D==0) {
			if(Dx==0 && Dy==0){
				console.log('pt vo so nghiem')
			}
			else{
				console.log('pt vo nghiem')
			}
		}
	}
}
giai(1,2,6,2,1,6);



