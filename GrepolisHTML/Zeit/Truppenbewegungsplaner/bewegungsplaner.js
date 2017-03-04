

function fillTable()
{
	document.Form1.Transportboot.value = "Transportboot";
	document.Form1.schnellesTransportboot.value = "schnelles Transportboot/Bireme";
	document.Form1.Feuerschiff.value = "Feuerschiff";	
	document.Form1.Brander.value = "Brander";
	document.Form1.Tireme.value = "Tireme";
	document.Form1.Kolonieschiff.value = "Kolonieschiff";
	
	document.Form1.TransportbootGeschw.value = 8;
	document.Form1.schnellesTransportbootGeschw.value = 15;
	document.Form1.FeuerschiffGeschw.value = 13;	
	document.Form1.BranderGeschw.value = 5;
	document.Form1.TiremeGeschw.value = 9;
	document.Form1.KolonieschiffGeschw.value = 3;
	
	document.Form1.Servergeschwindigkeit.value = 1;
}

function copyTable()
{
	document.Form1.TransportbootE.value = document.Form1.Transportboot.value;
	document.Form1.schnellesTransportbootE.value = document.Form1.schnellesTransportboot.value;
	document.Form1.FeuerschiffE.value = document.Form1.Feuerschiff.value;	
	document.Form1.BranderE.value = document.Form1.Brander.value;
	document.Form1.TiremeE.value = document.Form1.Tireme.value;
	document.Form1.KolonieschiffE.value = document.Form1.Kolonieschiff.value;
}

function berechneLaufzeiten()
{
	copyTable();
	
	
	var ankunftszeitStunde = parseFloat(document.Form1.AnkunftStd.value);
	var ankunftszeitMinute = parseFloat(document.Form1.AnkunftMin.value);
	var ankunftszeitSekunde = parseFloat(document.Form1.AnkunftSek.value);
	var ankunftszeitTotal = konvertiereZuSekunden(ankunftszeitStunde, ankunftszeitMinute, ankunftszeitSekunde);
	
	
	var LZStunde = parseFloat(document.Form1.LaufzeitStd.value);
	var LZMinute = parseFloat(document.Form1.LaufzeitMin.value);
	var LZSekunde = parseFloat(document.Form1.LaufzeitSek.value);
	var serverGeschwindigkeit = parseFloat(document.Form1.Servergeschwindigkeit.value);
	
	var GeschwindigkeitTransportschiff = parseFloat(document.Form1.TransportbootGeschw.value);
	var GeschwindigkeitBireme = parseFloat(document.Form1.schnellesTransportbootGeschw.value);
	var GeschwindigkeitFeuerschiff = parseFloat(document.Form1.FeuerschiffGeschw.value);	
	var GeschwindigkeitBrander = parseFloat(document.Form1.BranderGeschw.value);
	var GeschwindigkeitTireme = parseFloat(document.Form1.TiremeGeschw.value);
	var GeschwindigkeitKolonieschiff = parseFloat(document.Form1.KolonieschiffGeschw.value);
	
	var LZTransportboot = konvertiereZuSekunden(LZStunde, LZMinute, LZSekunde);
	var LZBireme = konvertiereGeschwindigkeit(serverGeschwindigkeit, LZTransportboot, GeschwindigkeitTransportschiff, GeschwindigkeitBireme);
	var LZFeuerschiffe = konvertiereGeschwindigkeit(serverGeschwindigkeit, LZTransportboot, GeschwindigkeitTransportschiff, GeschwindigkeitFeuerschiff);
	var LZBrander = konvertiereGeschwindigkeit(serverGeschwindigkeit, LZTransportboot, GeschwindigkeitTransportschiff, GeschwindigkeitBrander);
	var LZTireme = konvertiereGeschwindigkeit(serverGeschwindigkeit, LZTransportboot, GeschwindigkeitTransportschiff, GeschwindigkeitTireme);
	var LZKolonieschiff = konvertiereGeschwindigkeit(serverGeschwindigkeit, LZTransportboot, GeschwindigkeitTransportschiff, GeschwindigkeitKolonieschiff);
	
	
	LZTransportboot = ankunftszeitTotal-LZTransportboot;
	LZBireme = ankunftszeitTotal-LZBireme;
	LZFeuerschiffe = ankunftszeitTotal-LZFeuerschiffe;
	LZBrander = ankunftszeitTotal-LZBrander;
	LZTireme = ankunftszeitTotal-LZTireme;
	LZKolonieschiff = ankunftszeitTotal-LZKolonieschiff;
	
	document.Form1.TransportbootGeschwE.value = berechneStunden(LZTransportboot)+":"+berechneMinuten(LZTransportboot)+":"+berechneSekunden(LZTransportboot);
	document.Form1.schnellesTransportbootGeschwE.value = berechneStunden(LZBireme)+":"+berechneMinuten(LZBireme)+":"+berechneSekunden(LZBireme);
	document.Form1.FeuerschiffGeschwE.value = berechneStunden(LZFeuerschiffe)+":"+berechneMinuten(LZFeuerschiffe)+":"+berechneSekunden(LZFeuerschiffe);	
	document.Form1.BranderGeschwE.value = berechneStunden(LZBrander)+":"+berechneMinuten(LZBrander)+":"+berechneSekunden(LZBrander);
	document.Form1.TiremeGeschwE.value = berechneStunden(LZTireme)+":"+berechneMinuten(LZTireme)+":"+berechneSekunden(LZTireme);
	document.Form1.KolonieschiffGeschwE.value =  berechneStunden(LZKolonieschiff)+":"+berechneMinuten(LZKolonieschiff)+":"+berechneSekunden(LZKolonieschiff);
}

/*
 * Konvertiert eine Laufzeit, gemessen in Sekunden, zu einer gegebenen Geschwindigkeit in 
 * die Laufzeit einer anderen Geschwindigkeit.
 */
function konvertiereGeschwindigkeit(serverSpeed, bekLaufzeit, bekGeschwindigkeit, gesGeschwindigkeit)
{
	return Math.round( (bekLaufzeit-15*60/serverSpeed)*bekGeschwindigkeit/gesGeschwindigkeit+15*60/serverSpeed );
}

/*
 * Konvertiert eine Zeit in Sekunden
 */
function konvertiereZuSekunden(stunden, minuten, sekunden)
{
	return (stunden*60+minuten)*60+sekunden;
}

/*
 * Berechnet zu einer Laufzeit, die in Sekunden gegeben ist, den Sekundenanteil
 */
function berechneSekunden(laufzeit)
{
	return laufzeit%60;
}

/*
 * Berechnet zu einer Laufzeit, die in Sekunden gegeben ist, den Minutenanteil
 */
function berechneMinuten(laufzeit)
{
	return ((laufzeit-laufzeit%60 )/60)%60;;
}

/*
 * Berechnet zu einer Laufzeit, die in Sekunden gegeben ist, den Stundenanteil
 */
function berechneStunden(laufzeit)
{
	return (laufzeit-60*berechneMinuten(laufzeit)-berechneSekunden(laufzeit))/60/60;
}