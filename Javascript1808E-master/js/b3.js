// hoc ve mang trong js
// cach khai bao mang
// 1 - mang don (mang 1 chieu)
let fruits = ['tao','le','man','sauRieng','oi'];
let numbers = new Array(1,2,3,4,5,6,7,8,9);
// 2 - mang da chieu (nhieu chieu)
let persons = [
	'nguyen van A',
	20,
	'Ha Noi',
	['C','C++','JS','PHP'],
	['Tennis','Football',
		[1,2,3,4,6,
			['A','B','C']
		]
	]
];
// dem so luong phan tu trong mang nhu the nao
// cu phap : tenmang.length
let countFruits = fruits.length;
console.log(countFruits);
// truy xuat vao gia tri cua 1 phan tu nam trong mang
// cu phap : tenmang[chi_so_cua_phan_tu];
console.log(fruits[3]);
// in ra ngoai man hinh console cua trinh duyet tu "PHP" trong mang persons
console.log(persons[3][3]);
// truy xuat vao tat ca cac phan tu nam trong mang
// 1 - dung for
let countEl = numbers.length;
for(let i = 0; i< countEl; i++){
	console.log(i, numbers[i]);

}
// 2 - dung forEach
let myNumbers = [1,2,3,4,5,6,7,8,9];
 myNumbers.forEach(function(i,k){
 	// i : gia tri cua phan tu
 	// k: vi tri cua phan tu do
 	console.log(i, k);
 });
 // su dung for hoac forEach tim vi tri cua so 8 nam trong mang - viet ham(tuy loai ham)
function timViTriPhanTu(n,arr){
	//1 - for
	/*
	let count = arr.length;
	for (let i = 0; i < count; i++) {
		if(arr[i] == n){
			return i;
		}
	}
	return false;
	*/

	let pos;
	arr.forEach(function(j,k){
		if(j == n){
			pos = k;
		}
	});
	return pos;
	
}
console.log(timViTriPhanTu(8,myNumbers));
let test = ['bmw','toyota','honda','suzuki'];
for( let i of test){
	console.log(i);
}
// cho 1 mang tu 1-100 : lay tat ra cac so chia het cho 5
function timKiem(n,m,k){
	let kq = '';
	for(let i = n; i <= m; i++){
		if(i%k ==0){
			kq += (kq == '') ? i : ',' + i;
		}
	}
	return kq;
}

console.log(timKiem(1,500,3));

let myNumbers123 = [1,2,3,4,5,6,7,8,9];
// viet ham sap xep mang - tang dan hay giam dan

