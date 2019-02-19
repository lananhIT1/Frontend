function giai(){
  var a= document.getElementById('hesoa').value;
  var b= document.getElementById('hesob').value;
  var c= document.getElementById('hesoc').value;
  denta=b*b-4*a*c;
  // let checka=null;
  // let checkb=null;
  // let checkc=null;
  if(a==''){
    // checka=false;
    document.getElementById('hesoa').style.border='1px solid red';
  }else{
    checka=true;
    document.getElementById('hesoa').style.border='';
  }
  if(b==''){
    checkb=false;
    document.getElementById('hesob').style.border='1px solid red';
   
  }else{
    checkb=true;
    document.getElementById('hesoa').style.border='';
    
  }
  if(c==''){
    document.getElementById('hesoc').style.border='1px solid red';
    return;
  }
}