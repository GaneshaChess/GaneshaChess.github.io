function init()
{
	document.Form1.VertStichwaffen.value = 1000;
	document.Form1.GewichtungStichwaffen.value = 1;
	
	document.Form1.OffsetStich.value = 0;
	document.Form1.OffsetSchlag.value = 0;
	document.Form1.OffsetFern.value = 0;
}

function fSumme()
{
	var VertStichwaffen = parseFloat(document.Form1.VertStichwaffen.value); 

	var GewichtungStichwaffen = parseFloat(document.Form1.GewichtungStichwaffen.value);

	var offsetStich = parseFloat(document.Form1.OffsetStich.value);
	var offsetSchlag = parseFloat(document.Form1.OffsetSchlag.value);
	var offsetFern = parseFloat(document.Form1.OffsetFern.value);
	
	var vStich = VertStichwaffen*GewichtungStichwaffen - offsetStich; //n3
	var vFern = 1.658654*VertStichwaffen - offsetFern; //n2 
	var vSchlag = 1.07421875*VertStichwaffen - offsetSchlag; //n1

	var anzSchwert = -0.00326*vSchlag+0.03973*vFern-0.01829*vStich; //1
	var anzBogen   = -0.03195*vSchlag+0.00252*vFern+0.04646*vStich; //2
	var anzHopliten = 0.06874*vSchlag-0.03174*vFern-0.00126*vStich; //3

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
}