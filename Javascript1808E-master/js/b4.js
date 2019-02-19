// cac phuong thuc lam viec voi mang trong js
let arrNumber = [1,2,3,4,5,7];
// them 1 phan tu vao cuoi mang
// tuu chung cong thuc su dung mang : tenmang.ten ham
arrNumber.push(100);
console.log(arrNumber);
// xoa bo phan tu o dau mang (phan tu dau tien cua mang)

let firstEl = arrNumber.shift();
console.log(firstEl, arrNumber);
// xoa bo di phan tu cuoi cung cua mang
let lastEl = arrNumber.pop();
console.log(lastEl, arrNumber);
// them phan tu vao dau mang (no se tro thanh phan tu dau tien)
arrNumber.unshift(lastEl);
console.log(arrNumber);

let newArrNum = [100,200,300,400,500,600];
// tim 1 phan tu co nam trong mang ko ?
// indexOf
let pos = newArrNum.indexOf(3000);
console.log(pos);
let pos2 = newArrNum.lastIndexOf(100); 
console.log(pos2);
//console.log(newArrNum.reverse());
let arr2 = newArrNum.slice(2,4);
console.log(arr2, newArrNum);
// [100,200,3,4,5,600];
newArrNum.splice(2,3,3,4,5);
console.log(newArrNum);

let testNumber = [1,2,3,4,5,6,8,9];
// kiem tra so 7 nam trong mang ko ? neu co tach 1 mang con tu vi tri do cho den het mang. Neu khong them no vao dau mang.
// dinh nghia ham
let timKiemPT = (el, arr) => {
	let pos = arr.indexOf(el);
	if(pos !== -1){
		// co ton tai phan tu trong mang
		let newArr = arr.slice(pos,arr.length);
		return newArr;
	} else {
		// khong ton tai phan tu trong mang
		arr.unshift(el);
		return arr;
	}
}
console.log(timKiemPT(7,testNumber));
let myNumbers = [1,2,3,4,5,6,7,8,9];
// kiem tra trong mang co bao nhieu so le  thi tra ve mot mang toan nhung so le do
// [1,3,5,7,9]
let timSoLe = (arr) => {
	let kq = [];
	arr.forEach(function(e, i) {
		if(e % 2 !== 0){
			kq.push(e);
		}
	});
	return kq;
}
////////////////////////////////////////////////
let fruits = ['tao','le','man','oi','chuoi'];
// chuyen mang nay ve chuoi
let newString = fruits.join();
console.log(newString);
let newString2 = fruits.toString();
console.log(newString2);

if(Array.isArray(newString2)){
	console.log('Y')
} else {
	console.log('N');
}

// hoc cach sap xep mang trong js
let oderArr = [5,2,34,245,1,0,9,12];
// oderArr.sort(function(b,a){
// 	return a - b;
// });
// console.log(oderArr);
// dinh nghia 1 ham sap xep mang theo cac thuat toan co ban
let myOrderArray = (arr) => {
	// dung for thuong
	// dung forEach
	let count = arr.length;
	let tmp;
	for(let  i= 0; i<count;i++){
		for(let j = i+1; j <= count; j++){
			if(arr[i] < arr[j]){
				arr[i] = tmp;
				tmp = arr[j];
				arr[j] = arr[i];
			}
		}
	}
	return arr;
	// let tmp;
	// arr.forEach( function(e, i) {
	// 	arr.forEach( function(e2, i2) {
	// 		if(arr[i] < arr[i2]){
	// 			arr[i] = tmp;
	// 			tmp = arr[i2];
	// 			arr[i2] = arr[i];
	// 		}
	// 	})
	// });
	// return arr;
}

console.log(myOrderArray(oderArr));

/*********************************************/
// object trong js
let myCar = {
	name: 'bmw',
	color: 'black',
	start: function(){
		return "OK";
	},
	stop: function(a){
		return `this is ${a}`;
	},
	manufacture: {
		namManu : 'BAC',
		address: 'HN',
		version: {
			year: 2018,
			money: 2000
		}
	}
};
// su dung object
// truy cap vao 1 phan tu nam trong object
// nameObject.key
// thuoc tinh
console.log(myCar.name);
// phuong thuc
console.log(myCar.start());
console.log(myCar.manufacture.version.money);

let ptbn = {
	nghiem: function(a,b){
		return -b/a;
	}
};
// function constructor : dung ham dinh nghia object
function kiemTraChanLe(n){
	// khai bao thuoc tinh
	this.hs = n; // kiemTraChanLe
	// dinh nghia phuong thuc
	this.kiemTra = function(){
		if(this.hs % 2 == 0){
			return true;
		}
		return false;
	}
}
let kt = new kiemTraChanLe(9);

if(kt.kiemTra()){
	console.log('so chan');
} else {
	console.log('so le')
}

// viet ham constructor - kiem tra 3 canh tao thanh 1 tam giac ko
function kiemTraTamGiac(a,b,c){
	this.canhA = a;
	this.canhB = b;
	this.canhC = c;
	this.kt = function(){

	}
}

let students = {
	name: 'NVA',
	age: 19,
	address: 'HN',
	gender: 'nam'
}
// duyet qua tat ca cac phan tu nam trong object
for(let i in students){
	console.log(i, students[i]);
}
 /***************** String of JS ***************/
 let newStr = "chung ta dang hoc js";
 // kiem tra xem ki tu co nam trong chuoi khong
 let myTK = newStr.indexOf('js');
 console.log(myTK);
 let anpha = 'A,B,C,D,E';
 // chuyen chuoi ve mang - dua vao ky tu trong chuoi
 let arrAnpha = anpha.split(',');
 console.log(arrAnpha);
let newStr2 = "sap duoc ve nha roi";
let newStr3 = "oi mung qua may oi";

let myUrl = "https://vnexpress.net/tfdsfdsgdfg-ff9949483385-fsdfssu-viec-3824437.html";

/*******************************************************/
// moi lien he giua chuoi va so
// 1 - chuyen chuoi ve so
let numberString = '100000';
numberString = eval(numberString);
console.log(typeof numberString);
// 2 - chuyen so ve chuoi
let numberInt = 1000;
numberInt = numberInt.toString();
console.log(typeof numberInt);
