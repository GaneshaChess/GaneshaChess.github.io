function berechneGeschwindigkeit()
{
	  var serverSpeed = parseFloat(document.Form1. EinheitenGeschwindigkeit.value);
	  var bekLaufzeitStd = parseFloat(document.Form1.bekLaufzeitStd.value);
	  var bekLaufzeitMin = parseFloat(document.Form1.bekLaufzeitMin.value);
	  var bekLaufzeitSek = parseFloat(document.Form1.bekLaufzeitSek.value);
	  
	  //var bekLaufzeit = bekLaufzeitStd*60*60+bekLaufzeitMin*60+bekLaufzeitSek;
	  var bekLaufzeit = konvertiereZuSekunden(bekLaufzeitStd, bekLaufzeitMin, bekLaufzeitSek);
	  var bekGeschwindigkeit = parseFloat(document.Form1.bekGeschwindigkeit.value);
	  var gesGeschwindigkeit = parseFloat(document.Form1.gesGeschwindigkeit.value);
	  
	  var gesLaufzeitTotal = konvertiereGeschwindigkeit(serverSpeed, bekLaufzeit, bekGeschwindigkeit, gesGeschwindigkeit);
     // var gesLaufzeitTotal = Math.round( (bekLaufzeit-15*60/serverSpeed)*bekGeschwindigkeit/gesGeschwindigkeit+15*60/serverSpeed );
          
      document.Form1.gesLaufzeitSek.value = berechneSekunden( gesLaufzeitTotal );
      document.Form1.gesLaufzeitMin.value = berechneMinuten( gesLaufzeitTotal );
      document.Form1.gesLaufzeitStd.value = berechneStunden( gesLaufzeitTotal );
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

function init()
{
	  document.Form1.bekLaufzeitStd.value = 0;
	  document.Form1.bekLaufzeitMin.value = 0;
	  document.Form1.bekLaufzeitSek.value = 0;
	  document.Form1.bekGeschwindigkeit.value = 1;
	  document.Form1.gesGeschwindigkeit.value = 1;
	  document.Form1.EinheitenGeschwindigkeit.value = 1;
}