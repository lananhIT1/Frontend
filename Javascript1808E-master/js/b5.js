// cac kien thuc xu ly ngay thang trong js
// lay ra ngay thang hien tai
let d = new Date();
console.log(d);
// lay ra ngay thang mong muon
// can tru di 1 don vi - lay ra dung thang mong muon
let d2 = new Date(2018,9,18);
console.log(d2);
// cac phuong thuc (ham) lam viec voi date trong js
// day la cac phuong thuc duoc ngon ngu js dinh nghia san
// lay ra ngay hien tai trong thang
let myDate = d.getDate();
console.log(myDate);
// lay ra ngay trong tuan
let myDay = d.getDay();
console.log(myDay);
// lay ra thang hien tai
let myMonth = d.getMonth() + 1;
console.log(myMonth);

let myTime = d.getTime();
console.log(myTime);

let yesterday = '2018-10-17';
let toDay  = '2018-10-18';
// so sanh xem ngay nao lon hon
let timeYesterday = Date.parse(yesterday);
let timeToday =  Date.parse(toDay);
console.log(timeYesterday, timeToday);
if(timeToday > timeYesterday){
	console.log('Y');
} else {
	console.log('N');
}

// chuyen doi ngay thang
// co tinh chuyen ngay hien sang ngay khac
let convertDate = d.setDate(15);
// lay ra ngay hien tai
console.log(d.getDate());

let birthDay = prompt('moi nhap ngay sinh nhat - vui long nhap dinh dang : YYYY-MM-DD');
console.log(birthDay);
// viet ham giai quyet
let checkBirthDay = (birthDays) => {
	// so sanh voi ngay hien tai de kiem tra:
	// 1 - da qua sinh nhat chua ?
	// 2 - co phai hom nay la sinh nhat ko?
	// 3 - chua toi sinh nhat . Tinh duoc con bao nhieu ngay nua
	// cac lam :
	// A : can lay ra thang - ngay ma nguoi dung nhap vao(khong quan tam nam)
	let myDate = new Date();

	let arrBirthDay = birthDays.split('-');
	let currentBirthDay = myDate.getFullYear()+'-'+arrBirthDay[1]+'-'+arrBirthDay[2];

	// B : can lay nam-thang-ngay hien tai de so sanh voi currentBirthDay
	let y = myDate.getFullYear();
	let m = myDate.getMonth()+1;
	let d = myDate.getDate();
	let currentDay = y+'-'+m+'-'+d;

	// C: so sanh currentBirthDay va currentDay
	let timeCurrentDay = Date.parse(currentDay);
	let timeCurrentBirthDay = date.parse(currentBirthDay);
	if(timeCurrentDay > timeCurrentBirthDay){
		// qua sinh nhat
		console.log('qua sinh nhat ban roi');
	} else if(timeCurrentDay == timeCurrentBirthDay){
		// dung la sinh nhat
		console.log('Chuc mung sinh nhat ban');
	} else if(timeCurrentDay < timeCurrentBirthDay){
		// chua toi - tinh con bao nhieu ngay
		let rangeDay = timeCurrentBirthDay - timeCurrentDay;
		let days = Math.ceil(rangeDay/86400000);
		console.log(`con ${days} ngay toi sinh nhat ban`);
	} else{
		console.log('loi - khong xac dinh');
	}
}

checkBirthDay(birthDay);







