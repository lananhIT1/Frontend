function calc(){
	var num1=document.getElementById('num1').value;
	if(num1==""){
		alert("so thu nhat dang trong");
		document.getElementById('num1').focus();
		return;

	}
	if(isNaN(num1)){
		alert("ban nhap khong phai so");
		document.getElementById('num1').focus();
		document.getElementById('num1').select();
		return;
	}
	var num2=document.getElementById('num2').value;
	if(num2==""){
		alert("so thu hai dang trong");
		document.getElementById('num2').focus();
		return;

	}
	if(isNaN(num2)){
		alert("ban nhap khong phai so");
		document.getElementById('num2').focus();
		document.getElementById('num2').select();
		return;
	}
	//xac dinh phep toan
	function checkNut(id){
		return document.getElementById(id).checked;
	}
	var result=0;
	if(checkNut('add')){
		result=parseFloat(num1)+parseFloat(num2);
	}else {
		result=parseFloat(num1)-parseFloat(num2);
	}
	document.getElementById('result').value=result;

}
function clear0(id){
	document.getElementById(id).value="";
}
function clr(){
	clear0('num1');
	clear0('num2');
	clear0('result');
	document.getElementById('num1').focus();
}