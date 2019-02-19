function giai(){
  var a=document.getElementById('hesoa').value;
  var b= document.getElementById('hesob').value;
  var c= document.getElementById('hesoc').value;
  // denta=b*b-4*a*c;
  // let checka=null;
  // let checkb=null;
  // let checkc=null;
  if(a==''|| isNaN(a)){
    document.getElementById('hesoa').style.border='1px solid red';
    document.getElementById('nhaplai').innerHTML='nhap he so va dl phai la so';
  }else{
    document.getElementById('hesoa').style.border='';
  }
  if(b==''|| isNaN(b)){
    document.getElementById('hesob').style.border='1px solid red';
    
  }else{
    document.getElementById('hesob').style.border='';
  }
  if(c=='' || isNaN(c)){
    
    document.getElementById('hesoc').style.border='1px solid red';

   }else{
    document.getElementById('hesoc').style.border='';
  }
  if(a!='' && b!='' && c!=''){
    var kq=0;
    a=parseFloat(a);
    b=parseFloat(b);
    c=parseFloat(c);
    

    var denta=b*b-4*a*c;
    if(denta==0){
      var x=-b/(2*a);
      document.getElementById('ketqua').innerHTML=`Phuong trinh co nghiem kep la : x= ${x}`;
    }else if(denta>0){
      var x1=(-b+Math.sqrt(denta))/(2*a);
      var x2=(-b-Math.sqrt(denta))/(2*a);
      document.getElementById('ketqua').innerHTML=`Phuong trinh co 2 nghiem x1=${x1} va x2=${x2}`;
    }else{
      document.getElementById('ketqua').innerHTML='pt vo nghiem';
    }
  }
  
}