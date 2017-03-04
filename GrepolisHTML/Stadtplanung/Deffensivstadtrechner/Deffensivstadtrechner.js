function init()
{
	document.Form1.bauernhofpl.value = 200;
	document.Form1.bKostenTranse.value = 7;
	
	document.Form1.GewichtungStichwaffen.value = 1;
	document.Form1.transK.value = 20;
}

function fSumme()
{
var bauernhofpl = parseFloat(document.Form1.bauernhofpl.value); 
var bKostenTranse = parseFloat(document.Form1.bKostenTranse.value);

var VertStichwaffen = 10000; //Standardgewichtung

var GewichtungStichwaffen = parseFloat(document.Form1.GewichtungStichwaffen.value);
var transK = parseFloat(document.Form1.transK.value);

var vStich = VertStichwaffen*GewichtungStichwaffen; //n3
var vFern = 1.658654*VertStichwaffen; //n2
var vSchlag = 1.07421875*VertStichwaffen; //n1

var anzSchwert = -0.00326*vSchlag+0.03973*vFern-0.01829*vStich; //1
var anzBogen   = -0.03195*vSchlag+0.00252*vFern+0.04646*vStich; //2
var anzHopliten = 0.06874*vSchlag-0.03174*vFern-0.00126*vStich; //3

var truppenst = anzSchwert+anzBogen+anzHopliten;
var anzTransen = bauernhofpl/(bKostenTranse+transK);
var gesKapazit = bauernhofpl-anzTransen*bKostenTranse;

anzSchwert = anzSchwert * gesKapazit/truppenst;
anzBogen = anzBogen*gesKapazit/truppenst;
anzHopliten = anzHopliten*gesKapazit/truppenst;

document.Form1.AnzSchwert.value = anzSchwert;
document.Form1.AnzBogen.value = anzBogen;
document.Form1.AnzHopliten.value = anzHopliten;

var KostenVerteidiger = anzSchwert*180+anzBogen*195+anzHopliten*225;

var KostenStichangriff = vStich*14.0625;
var KostenSchlagangriff = vSchlag*13.091;
var KostenFernangriff = vFern*8.478;

document.Form1.KostenAbwehr.value = KostenVerteidiger;

document.Form1.KostenStich.value = KostenStichangriff;
document.Form1.KostenSchlag.value = KostenSchlagangriff;
document.Form1.KostenFern.value = KostenFernangriff;

document.Form1.AnzTransportschiffe.value = anzTransen;


}