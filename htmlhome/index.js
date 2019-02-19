// var a;
// function click1(){
// 	a=document.getElementById('p').style.display="block";
// 	console.log('1');
// };
// function click2(){
// 	document.getElementById('p').style.display="none";
// 	document.getElementById('dangki').style.display="block";
// 	console.log('1');

// };
function show1(id){
document.getElementById(id).style.display="block";
 }
// function hide1(id){
// document.getElementById(id).style.display="none";
// }
// function click1(){
// 	show1('p');
// }
// function click2(){
// 	show1('dangki');
// }

		
function click1(){
	var z = document.getElementsByClassName("general");
	 for(var i=0; i < z.length ; i++){
	 	z[i].style.display="none";	
  	}
	 show1('lienhe');
};
  function the(id){
			var i=document.getElementById(id).value;
			return i;
	};
	 function click10(){
			//var kq="";
			var a=the('name');
			var b=the('password');
 		var c=the('passwordrepeat');
			var d=the('hoten');
	 		var kq="";
			kq=kq+"tên đăng nhập: " +a;
	 		kq+=" <br>Mật khẩu: "+b;
	 		kq+="<br>Họ tên: "+c;
	 		document.getElementById('hienthithongtin').innerHTML=kq;
			
	 };


 function click2(){
 	var z = document.getElementsByClassName("general");
	for(var i=0; i < z.length ; i++){
		z[i].style.display="none";	

 	}
		show1('danhsach');
 };
 function click3(){
 	var z = document.getElementsByClassName("general");


	for(var i=0; i < z.length ; i++){
		z[i].style.display="none";	

 	}

 	 show1('dangki');
 	};
 
 function click4(){
 	var z = document.getElementsByClassName("general");


	for(var i=0; i < z.length ; i++){
		z[i].style.display="none";	

 	}

 	 show1('quangcao');
 };
 

