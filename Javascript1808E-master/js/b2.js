// tiep tuc ve ham trong js
// khai bao ham vo danh
let mySum = function(a, b){
	return a + b;
}
// kiem tra kieu du lieu cua bien dc gan bang ham
console.log(typeof mySum);
// su dung ham loai nay :
console.log(mySum(10,11));

// nested function - ham nam trong ham
function chuViHCN(a,b){
	function sum(){
		return a+b;
	}
	function multy(c){
		return sum()*2/c;
	}
	return multy;
}
console.log(chuViHCN(5,6)(10));
// su dung loai ham nay - viet chuong trinh giai bai tap ve nha : he phuong trinh bac nhat 2 an

 function giaiHPTBN2A(a,b,c, a1,b1,c1){
 	function detD(){
 		return a*b1 - a1*b;
 	}
 	function detDX(){
 		return 10;
 	}
 	function detDY(){
 		return 20
 	}
 	function timNghiem(){
 		// giai bien luan o day
 		// khi nao vo nghiem
 		// khi nao co nghiem
 		if(detD == 0){
 			return 'Vo nghiem'
 		} else {
 			let x = 10;
 			let y = 20;
 			return "PT co nghiem la " + x + 'va'+ y;

 		}
 	}
 	return timNghiem();
}

// viet ham loai tinh giai thua cua mot so bat ky
function tinhGiaiThua(n){
	function tinh(){
		let kq = 1;
		for (let i = 1; i <= n ; i++) {
			kq *= i;
		}
		return kq;
	}
	function show(){
		let res = tinh();
		//return `giai thua cua ${n} la : ${res}`;
		return 'giai thua cua' + n + ' la: ' + res;
	}
	return show();
}
console.log(tinhGiaiThua(10));

// dinh ham arrow function
let giaiPTBN = (a,b) => {
	return -b+a;
}
//giaiPTBN(2,4);
let hsa = prompt('Nhap he so a');
// vi hsa va hsb no la kieu string nen khong the tinh toan so hoc chuan xac dc - can chuyen ve kieu so
hsa = Number.parseInt(hsa);

let hsb = prompt('Nhap he so b');
hsb = Number.parseInt(hsb);

let result = giaiPTBN(hsa, hsb);
console.log(`nghiem pt la ${result}`);

let myNubem = '200';
// kiem tra xem no co phai la so hay ko?
if(Number.isInteger(myNubem)){
	console.log('Yes');
} else {
	console.log('No');
}

let n1 = 100;
let n2 = 100/0;
console.log(typeof n2);

if(Number.isNaN(n2)){
	
	console.log(n2, 'Y');
} else {
	console.log(n2, 'N');
}

if(Number.isInteger(n2)){
	console.log('OK');
} else {
	console.log('ERR');
}



