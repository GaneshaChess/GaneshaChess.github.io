function init()
{
	 document.Form1.OffsetStich.value = 1000;
	 document.Form1.OffsetSchlag.value = 1000;
	 document.Form1.OffsetFern.value = 1000;

}

function ermittleAngriffskosten()
 {
	 var vStich = parseFloat(document.Form1.OffsetStich.value);
	 var vSchlag = parseFloat(document.Form1.OffsetSchlag.value);
	 var vFern = parseFloat(document.Form1.OffsetFern.value);

	 var KostenStichangriff = vStich*14.0625;
	 var KostenSchlagangriff = vSchlag*13.091;
	 var KostenFernangriff = vFern*8.478;

	 document.Form1.KostenStich.value = KostenStichangriff;
	 document.Form1.KostenSchlag.value = KostenSchlagangriff;
	 document.Form1.KostenFern.value = KostenFernangriff;
 }