function init()
{
	document.Form1.angriff.value = 1000;
	document.Form1.verteidigung.value = 2000;
}

function fFunktion(param)
 {
	//zu den Werten 0.0 0.1, 0.2, 0.3, 0.4 0.5 0.6 0.7 0.8 0.9 1
	var f = new Array(0, 0.063, 0.145, 0.236, 0.333, 0.4352, 0.541, 		0.651, 0.764, 0.88, 1);

	//nicht in der Implementation enthalten
	var x = new Array(0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 		1);

	
	var untereSchranke = Math.floor(param*10);
	var obereSchranke = (untereSchranke+1);
	var prozent = ((param*10)-untereSchranke);
	var ergebnis = f[untereSchranke]+(f[obereSchranke]-f[untereSchranke])*prozent;	
	
	return ergebnis;	
 }

function fBerechneVerlustRate(off, deff)
{
	var prozent = off/deff;
	return fFunktion(prozent);
}

function fBerechneVerlust()
{
	var off = parseFloat(document.Form1.angriff.value);
	var deff = parseFloat(document.Form1.verteidigung.value);

	document.Form1.verlust.value = fBerechneVerlustRate(off, deff);
}