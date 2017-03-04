function speichereZeiten()
{
	
	var z1 = document.Form1.TransportbootGeschwE.value;
	var z2 = document.Form1.schnellesTransportbootGeschwE.value;
	var z3 = document.Form1.FeuerschiffGeschwE.value;	
	var z4 = document.Form1.BranderGeschwE.value;
	var z5 = document.Form1.TiremeGeschwE.value;
	var z6 = document.Form1.KolonieschiffGeschwE.value;

	uebertrageZeit(z1, "Schicke Transportboote los");
	uebertrageZeit(z2, "Schicke schnellen Transportboote los");
	uebertrageZeit(z3, "Schicke Feuerschiffe los");
	uebertrageZeit(z4, "Schicke Brander los");
	uebertrageZeit(z5, "Schicke Tiremen los");
	uebertrageZeit(z6, "Schicke Kolonieschiff los");
}

function uebertrageZeit(zeit, beschreibung)
{
	var ca = zeit.split(':');
	var stunde = parseInt(ca[0]);
	var minute = parseInt(ca[1]);
	var sekunde = parseInt(ca[2]);
	speichereUhrzeitInCookie(stunde, minute, sekunde, beschreibung);
}