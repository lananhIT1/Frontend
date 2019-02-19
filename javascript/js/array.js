//hoc ve mang trong js
//cach kai bao mang
//1-mang don(mang 1 chieu)
let fruits = ['tao','le','dua','oi'];
let numbers = new Array(1,2,3,4,5,6);
//2-mang da chieu
let persons=[
	'nguyen van a',
	20,
	'ha noi',
	['C','C++','Js','php'],
	['tennis','footer',
		[1,2,3,4,5,
			['a','b','c']
		]
	]
];
//dem so luong phan tu trong mang 
let countfruits = fruits.length;
console.log(countfruits);
//truy xuat vao gia tri cua mot phan tu nam trong mang
//cu phap: tenmang[chi so cua phan tu];
console.log(fruits[1]);
console.log(persons[4][2][5][2]);
//truy xuat vao tat ca cac phan tu trong mang
//1-dung for thường
let countEl=numbers.length;
for(let i=0;i<numbers.length;i++){
	console.log(i,numbers[i]);
}
//2-dùng forEach
let myNumbers=[1,2,3,4,5,6,7,8,9];
myNumbers.forEach(function(i,k){
		//i:gia tri cua phan tu
		//k:vi tri cua phan tu do
		console.log(i,k);
});
//su dung forEach tim vi tri so 8 trong mang(viet ham tuy loai)
function timViTriPhanTu(n,arr){
	// for(let i=0;i<myNumbers.length;i++){
	// 	if(myNumbers[i]==n){
	// 		return i;
	// 	}
	// }
	// return false;
	let pos;
	arr.forEach(function(j,k){
		if(j==n){
			pos= k;
			
		}
	});
	return pos;
	
}
console.log(timViTriPhanTu(8,myNumbers));
let test=['bmw','toyota','honda','suzuki'];
for(let i of test){
	console.log(i,test[i]);
}
//von lap for ò chi in ra được giá trí ko lấy được vị trí.nếu chỉ lấy giá trị thì for of chạy nhanh nhất
//cho 1 mang tu 1->100.lấy tất ra các số chia het cho 5
function chiahet(n,m,k){
	let kq='';
	for(let i=n;i<=m;i++){
		if(i%k==0){
			kq +=(kq=='')? i :', ' + i;
		}
	}
	return kq;
}
console.log(chiahet(1,100,3));
let myNumbers123=[1,2,3,4,5,6,7,8,9];
// function hienthi(arr){
// 	for(var i=0;i<arr.length;i++){
// 		console.log(arr[i]);
// 	}
// }
// console.log(hienthi(myNumbers123));
  	function sapxep(arr){
  		function doicho(a,b){
	  		var tg=0;
 			tg=a;
  			a=b;
  			b=tg;	
  		}
  		function sapxep1(arr){
	  	for(var i=0;i< arr.length-1;i++){
	  		for(var j= arr.length-1;j>1;j--){
 				if(arr[j]<arr[j-1]){
					doicho(arr[j],arr[j-1]);	
 				}
 				
  			}
  		}
  		}
  		function hienthi(arr){
  			sapxep1(arr);
			for(var i=0;i<arr.length;i++){
			console.log(arr[i]);
			}
		}
 	}
console.log(sapxep(myNumbers123));