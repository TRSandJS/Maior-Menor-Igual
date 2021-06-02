document.frmPos.txtNuma.focus();

function verifica(){

var a,b;
a=parseInt(document.frmPos.txtNuma.value);
b=parseInt(document.frmPos.txtNumb.value);
if(a>b)
document.frmPos.txtR.value=a+ " É maior que " +b;
else if(a<b)
document.frmPos.txtR.value=a+ " É menor que " +b;
else if (a==b)
document.frmPos.txtR.value=a+ " É igual à " +b;
}