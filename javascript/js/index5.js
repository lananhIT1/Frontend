let d = new Date();
console.log(d);
//lay ra ngay thang mong muon
//can tru di 1 don vi- lay ra dung thang mong muon
let d2=new Date(2018,9,18);
console.log(d2);
//cac phuong thuc lam viec voi Date trong JS
//day la cac phuong thuc duoc ngon ng js dinh nghia san
let myDate = d.getDate();
console.log(myDate);
//LAY RA NGAY TRONG TUAN
let myDay = d.getDay();
console.log(myDay);
let myMonth=d.getMonth();
console.log(myMonth);
//lay ra so mini giay tu nam 1/1/1970
let myTime=d.getTime();
console.log(myTime);
let yesterday='2018-10-17';
let toDay='2018-10-18';
//so sanh xem ngay nao lon hon
let timeYesterday = Date.parse(yesterday);
let timeToday = Date.parse(toDay);
console.log(timeYesterday,timeToday);
if(timeToday>timeYesterday){
	console.log('timeToday lon hon timeYesterday');
}else{
	console.log('N');
}
//chuyen doi ngay thang
//co tinh chuyen ngay hien tai sang 1 ngay khac
let converDay=d.setDate(15);
//lay lai ngay hien tai
console.log(d.getDate());
//vidu
let birthDay=prompt('moi nhap ngay sn: - vui long nhap dinh dang : YYYY-MM-DD');
//VIET HAM GIAI QUYET
let checkBirthDay=(birthDays) =>{
	//so sanh voi ngay hien tai de kiem tra
	//1.da qua sinh nhat chua
	//co phai hom nay la sn khong
	//3-chua toi sinh nhat //tinh duoc con bn ngay nua
	//b1:A:can lay ra thang ngay ma nguoi dung nhap vao, khong quan tam nam
	let myDate1=new Date();
	let arrBirthDay=birthDay.split('-');
	
	let currentBirthDay=myDate1.getFullYear()+'-'+arrBirthDay[1]+'-'+arrBirthDay[2];
	 console.log(currentBirthDay);
	//B:can lay ra nam-thang-ngay hien tai de so sanh voi currentBirthDay
	let y=myDate1.getFullYear();
	let m=myDate1.getMonth()+1;
	let d=myDate1.getDate();
	let currentDay=y+'-'+m+'-'+d;
	let timeCurrentDay=Date.parse(currentDay);
	let timeCurrentBirthDay=Date.parse(currentBirthDay);
	if(timeCurrentDay>timeCurrentBirthDay){
		//qua sinh nhat
		console.log('qua sn b roi');
	}else if(timeCurrentDay==timeCurrentBirthDay){
		//dung sinh nhat
		console.log('cmsn b');

	}else if(timeCurrentDay<timeCurrentBirthDay){
		//chua toi.tinh con bao nhieu ngay
		let rangeDay=timeCurrentBirthDay-timeCurrentDay;
		
		let days=Math.ceil(rangeDay/86400000);
		console.log(` con ${days} ngay den sinh nhat ban`);

	}else{
		console.log('loi-ko xac dinh');
	}

}
checkBirthDay(birthDay);

