function Login(){
var done=0;
var usuario=document.login.usuario.value;
var password=document.login.password.value;
if (usuario=="USUARIO1" && password=="CONTRASEÑA1") {
window.location="file:///C:/Users/TurnoAM/Documents/proyecto2/cdmx-2018-06-bc-core-am-data-dashboard/src/index2.html";
}
if (usuario=="Pau" && password=="CONTRASEÑA2") {
window.location="file:///C:/Users/TurnoAM/Documents/proyecto2/cdmx-2018-06-bc-core-am-data-dashboard/src/index2.html";
}
if (usuario=="Lucile" && password=="contraseña12") {
window.location="file:///C:/Users/TurnoAM/Documents/proyecto2/cdmx-2018-06-bc-core-am-data-dashboard/src/index2.html";
}
}


document.oncontextmenu = function(){return false}
