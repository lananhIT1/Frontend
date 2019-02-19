//cac phuong thuc lam viec voi mang trong js
let arrNumber=[1,2,3,4,5,7];
//them 1 phan tu ao cuoi mang
//tuu chung cong thuc su dung mang :tenmang.tenham
arrNumber.push(100);
console.log(arrNumber);
//xoa bo phan tu dau mang
let firstEl=arrNumber.shift();
console.log(firstEl,arrNumber);
//xoa bo phan tu cuoi cua mang
let lastEl=arrNumber.pop();
console.log(lastEl,arrNumber);
//them phan tu vao dau mang(tro thanh phan tu dau tien)
arrNumber.unshift(lastEl);
console.log(arrNumber);
let newArrNum=[100,200,300,400,500,600];
//tim 1 phan tu co nam trong mang khong
//indexof
let pos=newArrNum.indexOf(300);
console.log(pos);
let pos2=newArrNum.lastIndexOf(100);
console.log(pos2);
//console.log(newArrNum.reverse());
//tach 1 mang cac phan tu tu vi tri start đến vị trí end
let arr2=newArrNum.slice(2,4);
console.log(arr2,newArrNum);
//thay the mang thanh mang khac
newArrNum.splice(2,3,3,4,5);//2-vi tri thay the, 3-bao nhieu gia tri can thay the
console.log(newArrNum);
//vd:
let testNumber=[1,2,3,4,5,6,7,8,9];
//ktra so 7 co nam trong mang ko?neu co, tach 1 mang con tu vi tri do cho den het mang.neu khong them nó vao dau mang
// 
 let timKiemPT =(el,arr) =>{
 	let pos=arr.indexOf(el);
 	// if(pos !=-1){
 	// 		//co ton tai phan tu trong mang
 	// 		let newArr=arr.slice(pos,arr.length);
		// 	return newArr;
 	// 	}
 	// 	else{
 	// 		//khong ton tai phan tu trong mang
 	// 		 arr.unshift(el);
 	// 		 return arr;
 	// 	}
 	return pos;
 }
 console.log(timKiemPT(7,testNumber));
 //kiemtra trong mang co bao nhieu so le thi tra ve mot mang nhung so le
let timSole=(arr) =>{
	let kq=[];
	arr.forEach(function(e,i){
		if(e%2!==0){
		kq.push(e);
		}
	});
	return kq;
}
console.log(timSole(testNumber));
//bien mang noi chuoi
let fruits=['tao','le','man','oi','chuoi'];
let newString=fruits.join('*');
console.log(newString);
let newString2=fruits.toString();
console.log(newString2);//tra ve mac dinh la dau phay
//kiemtra xem co phai mang khong.đối tượng Array.đối tượng isArray
if(Array.isArray(newString2)){
	console.log('Y');
}else{
	console.log('N');
}
//sap xep mang trong js
let orderArr=[5,7,1,4,9,10,0];
orderArr.sort(function(a,b){
	return b - a;
});
console.log(orderArr);
//dinh nghia ham sx theo cac thuat toan co ban
let myOrderArray = (arr)=>{
	//dung for thuong
	 for(var i=0;i<arr.length;i++){
		for(var j=i+1;j<arr.length;j++){
	 		if(arr[i]<arr[j]){
	 			var tg;
	 			tg=arr[i];
	 			arr[i]=arr[j];
	 			arr[j]=tg;

	 		}
	 	}
	 }
	 return arr;
	//dung forEach
	// let tmp;
	// arr.forEach(function(a,i){
	// 	arr.forEach(function(a2,i2){
	// 		if(arr[i]<arr[i2]){
	// 			arr[i]=tmp;
	// 			tmp=arr[i2];
	// 			arr[i2]=arr[i];
	// 		}
	// 	})
	// });
	// return arr;
}
console.log(myOrderArray(orderArr));
/******8***8*******--------------*/
//object trong js
let myCar = {
	name:'bmv',
	color:'black',
	start:function(){
		return 'ok'
	},
	stop: function(a){
		return `this is ${a}`;
	},
	menufacture : {
		namManu:'BAC',
		address: 'HN',
		version : {
			year:2018,
			money:2000
		}
	}
}
//su dung object
//truy cap vao 1 phan tu nam trong object
//nameObject.key
console.log(myCar.name);
console.log(myCar.start());
console.log(myCar.menufacture.version.money);
let ptbn = {
	nghiem: function(a,b){
		return -b/a;
	}
};
console.log(ptbn.nghiem(1,2));
//function constructor: dung hm dinh nghia object
function KiemTraChanLe(n){
	//khai bao thuoc tinh
	this.hs=n;
	//dinh nghia phuong thuc
	this.kiemTra=function(){
		if(this.hs%2==0){
			return true;
		}
			return false;
		
	}
}
let kt=new KiemTraChanLe(10);
if(kt.kiemTra()){
	console.log('so chan');
}else{
	console.log('so le');
}
//viet ham constructor -kiem tra 3 canh co tao thanh tam giac khong
function kiemTraTamGiac(a,b,c){
	this.a1=a;
	this.b1=b;
	this.c1=c;
	this.Check =function(){
		if(this.a1+this.b1>this.c1&&this.a1+this.c1>this.b1&&this.b1+this.c1>this.a1&&this.a1>0&&this.b1>0&&this.c1>0){
			return true;
		}
		return false;
	}
}
let check=new kiemTraTamGiac(3,-4,5);
if(check.Check()){
	console.log('tao thanh tam giac');
}
else{
	console.log('khong tao thanh tam giac');
}
let students={
	name:'NVA',
	age:19,
	address: 'Ha noi',
	gender: 'nam'
};
//duyet qua tat ca cac phan tu nam trong object
for(let i in students){
	console.log(i,students[i]);
}
/********8*/
let newStr="chung ta dang hoc js";
//kiem tra xem ki tu co nam trong chuoi khong
let myTK=newStr.indexOf('js');
console.log(myTK);
let newStrcon=newStr.slice(9,18);
console.log(newStrcon);
//BIEN CHUOI VE MANG
let anpha='A,B,C,D,E';
let arrAnpha=anpha.split(',');
console.log(arrAnpha);
let newStr2="sap duoc ve nha roi";
let newStr3=newStr2.substr(9,6);//6-so ki tu duoc cat
console.log(newStr3);
let newStr4="oi mung qua may oi";
let newStr5=newStr4.substring(3,12);//khac slice o cho vi tri end cua slice co the am 
console.log(newStr5);
let myUrl='//vnexpress.net/tin-tuc/thoi-su/tai-xe-tong-sap-gian-giao-truoc-ham-thu-thiem-toi3824437-kiet-su-viec-3824437.html';
function getid(url){
 	let newmyUrl1=url.split('-');
	 let newmyUrl2=newmyUrl1.reverse();
	 let newmyUrl3=newmyUrl2.slice(0,1);
	 let newmyUrl4=newmyUrl3.toString();
	 let newmyUrl5=newmyUrl4.split('.');
	 let newmyUrl6=newmyUrl5.slice(0,1);
	 console.log(newmyUrl6);
	 // let newmyUrl4=newmyUrl3.join('-');
	 // let newmyUrl5=newmyUrl4.slice(0,7);

	// console.log(newmyUrl5);
 }
 console.log(getid(myUrl));
 /*************8888**/
 //moi lien he giua chuoi va so
 //chuyen chuoi ve số
 let numberString='100000';
 numberString=eval(numberString);
 console.log(typeof numberString);
 //2.chuyen so ve chuoi
 let numberInt=1000;
 numberInt=numberInt.toString();
 console.log(typeof numberInt);
