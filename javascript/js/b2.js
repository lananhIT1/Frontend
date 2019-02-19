//tiep tuc ve js
//khai bao ham vo danh
let mySum=function(a,b){
	return a+b;
}
//kiem tra kieu du lieu duoc gan bang ham
console.log(typeof mySum);
//su dung ham loai nay
console.log(mySum(10,11));
//nested function-ham nam trong ham:long ham trong ham
function chuViHVN(a,b){
	function tong(){
		return a+b;
	}
	function multy(c){
		return tong()*2/c;
	}
	return multy;
}
console.log(chuViHVN(5,6)(10));//() de thuc thi ham
//su dung loai ham nay-viet chuong trinh giai btvn:hpt bac hat hai an
function giai(a1,b1,c1,a2,b2,c2){
	function d(){
		return a1*b2-a2*b1;
	}
	function dX(){
		return c1*b2-c2*b1;
	}
	function dY() {
		return a1*c2-a2*c1;
	}
	function nghiem1(){
		return dX()/d();

	}
	function nghiem2(){
		return dY()/d();
	}
	// function timnghiem(){
	// 	if(d()==0){
	// 		return 'pt vo nghiem';
	// 	else{
	// 		let x=nghiem1();
	// 		let y=nghiem2();
	// 		return 'pt co hai nghiem  la' + x +'va' + y;
	// 	}
	// 	}
	// }
	return  nghiem1() + 'va' + nghiem2();
}
console.log(giai(1,2,3,2,1,3));
//ham tinh gai thua
function giaithua(a){
	function tinh(){
		let kq=1;
		for(var i=a;i>0;i--){
		kq=kq*i;
		}
		return kq;
	}
	function show(){
		let res=tinh();
		return `gia thua cua ${a} la : ${res}`;//$ là truyen gia tri
	}
	return show();
	

}
console.log(giaithua(4));
//dinh nghia ham arrow function
// let giaiPTBN = (a,b)  => {
// 	return -b+a;
// }
// // console.log(giaiPTBN(2,4));
// let hsa = prompt('nhap he so a:');
// let hsb = prompt('nhap he so b:');
// //vi hsa la kieu string nen khong the tinh toan so hoc chuan xac duoc can chuyen ve chuoi so
// hsa=Number.parseInt(hsa);
// hsb=Number.parseInt(hsb);
// let result =giaiPTBN(hsa,hsb);
// console.log(`nghiem pt la ${result}`);
// let myNumber='200';
// //kiemtra xem co phai la so khong
// if(Number.isInteger(myNumber)){
// 	console.log('yes');

// }
// else{
// 	console.log('no');
// }
let n1=100;
let n2=100/0;
console.log(typeof n2);
if(Number.isNaN(n2)){
	console.log(n2,'Y');//infinity: vô cực vẫn là 1 số
}
else{
	console.log(n2,'N');
}
if(Number.isInteger(n2)){
	console.log('ok');
}
else{
	console.log('err');
}





