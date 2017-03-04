function init()
{
	var myVar = setInterval(function(){myTimer()},1000);
}

function testCookies()
{
	//var txt=$("<p id=1></p>").text("Text.");   // Create with jQuery
	//$("#Wecker").append(txt); 
	//$("#+i.toString()").append(txt); 
	
	var maxCookieNumer = 100;
	//speichereUhrzeitInCookie(0, 1, 2);
	gebeUhrzeitenAus(maxCookieNumer);
}

function myTimer() {
    var d = new Date();
    $("#Uhr").text( d.toLocaleTimeString() );
}

/*
 * alarm Funktion
 */
function alarm(id)
{
	$("#"+id).css("color","red");
	
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', '../bell.mp3');
    audioElement.setAttribute('autoplay', 'autoplay');
    audioElement.play();
    
	//AnsichtAktualisieren();
}

function fuegeUhrzeitHinzu()
{
	var stunde = parseInt(document.Form.Stunde.value);
	var minute = parseInt(document.Form.Minute.value);
	var sekunde = parseInt(document.Form.Sekunde.value);
	var beschreibung =document.Form.Beschreibung.value;
	speichereUhrzeitInCookie(stunde, minute, sekunde, beschreibung);
	AnsichtAktualisieren();
}

/*
 * Speichere eine beliebige Uhrzeit in einem Cookie ab.
 */
function speichereUhrzeitInCookie(stunde, minute, sekunde, beschreibung)
{
	//wann wird der cookie geloescht
    var date = new Date();
    date.setHours(stunde, minute+5, sekunde, 0);
    var expires = "; expires=" + date.toGMTString();
    
	var maxCookieNumer = 100;
	var cname = getFreeSpot(maxCookieNumer).toString();
	if ( cname == "101" ) alert("Zu viele Uhrzeiten");
	else
	{
		document.cookie=cname+"="+stunde.toString()+"-"+minute.toString()+"-"+sekunde.toString()+"-"+beschreibung+"-"+cname+expires;
	}
}

/*
 * Bisher nicht benutzt;
 */
//-----------------
function sortfunctionCookies(a, b)
{
	if ( a < b ) return -1;
	if ( a == b ) return 0;
	if ( a > b ) return 1;
}

function getSortedCookies(maxCookieNumer)
{
	var kekse = rufeListeVonCookiesAb(maxCookieNumer);
	kekse.sort();
	return kekse;
}

/*
 * Extrahiert ein Array von Uhrzeit aus den cookies
 */
function erhalteUhrzeiten(kekse)
{
	var uhrzeiten = [];
	
	for ( var i = 0; i < kekse.length; i = i + 1 )
	{
		if ( kekse[ i ] == "" ) continue;
		var ca = kekse[ i ].split('-');
		var stunde = parseInt(ca[0]);
		var minute = parseInt(ca[1]);
		var sekunde = parseInt(ca[2]);
		var uhrzeit = new Date();
		uhrzeit.setHours(stunde, minute, sekunde, 0);
		uhrzeiten.push(uhrzeit);
	}
	return uhrzeiten;
}

/*
 * Extrahiert ein Array von Beschreibungen aus den cookies
 */
function erhalteBeschreibungen(kekse)
{
	var beschreibungen = [];
	
	for ( var i = 0; i < kekse.length; i = i + 1 )
	{
		if ( kekse[ i ] == "" ) continue;
		//alert(kekse[ i ]);
		var ca = kekse[ i ].split('-');
		var beschreibung = ca[3];
		beschreibungen.push(beschreibung);
	}
	return beschreibungen;
}

/*
 * Extrahiert ein Array von Ids aus den cookies
 */
function erhalteIds(kekse)
{
	var ids = [];
	
	for ( var i = 0; i < kekse.length; i = i + 1 )
	{
		if ( kekse[ i ] == "" ) continue;
		//alert(kekse[ i ]);
		var ca = kekse[ i ].split('-');
		var id = ca[4];
		ids.push(id);
	}
	return ids;
}

//-------------------

/*
 * Hängt die Uhrzeiten an das Element mit der id #Wecker
 */
function gebeUhrzeitenAus(maxCookieNumer)
{
	var kekse = getSortedCookies(maxCookieNumer);
	var uhrzeiten = erhalteUhrzeiten(kekse);
	var beschreibungen = erhalteBeschreibungen(kekse);
	var ids = erhalteIds(kekse);
	
	for ( var i = 0; i < uhrzeiten.length; i = i + 1 )
	{
		gebeUhrzeitAus(uhrzeiten[ i ], ids[ i ], beschreibungen[ i ]);
	}
}

/*
 * Aktualisiert die Ansicht.
 */
function AnsichtAktualisieren()
{
	location.reload();
}

/*
 * Loescht ein Cookie
 */
function loescheCookie(cname)
{
	document.cookie=cname+"=";
	AnsichtAktualisieren();
}
/*
 * Haengt eine Uhrzeit an das Element #Wecker
 */
function gebeUhrzeitAus(datum, nummer, beschreibung)
{
	var stunde = datum.getHours();
	var minute = datum.getMinutes();
	var sekunde = datum.getSeconds();
	
	var std = stunde.toString();
	var min = minute.toString();
	var sek = sekunde.toString();
	
	if ( stunde < 10 ) std = "0"+std;
	if ( minute < 10 ) min = "0"+min;
	if ( sekunde < 10 ) sek = "0"+sek;
	
	var newElem = "<p id="+nummer+"></p>";
	//var txt=$(newElem).text(datum.toString() );
	var txt=$(newElem).text(std+":"+min+":"+sek+" "+beschreibung+" " );
	$("#Wecker").append(txt); 
	
	var $something= $('<input/>').attr({ type: 'button', name:'btn1', value:'löschen', onclick:'loescheCookie('+nummer+')'});
	$("#"+nummer).append($something);
	
	//setze Alarm
	var jetzt = (new Date()).getTime();
	var alarmZeit = new Date();
	alarmZeit.setHours(stunde, minute-5, sekunde, 0);//Alarm soll 5 Minuten vorher "klingeln"
	
	setTimeout(alarm, alarmZeit.getTime()-jetzt, nummer);
}

/*
 * Gibt eine Liste der Cookies zurueck.
 */
function rufeListeVonCookiesAb(maxCookieNumer)
{	

	var kekse = [];
	
	var maxCookieNumer = 100; 
	for(var i=0; i<maxCookieNumer; i++)
	{
		if ( isCookieSet(i.toString()) )
		{
			kekse.push(getCookie(i.toString()));
		}
	}
	return kekse;
}


/*
 * Gibt den Inhalt des Cookies mit dem
 * Name cname zurueck.
 */
function getCookie(cname)
{
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i=0; i<ca.length; i++)
	{
		var c = ca[i].trim();
		if (c.indexOf(name)==0) return c.substring(name.length,c.length);
	}
	return "";
}

/*
 * Wurde ein Cookie gesetzt?
 */
function isCookieSet(cname)
{
	if ( getCookie(cname) == "" ) return false;
	else return true;
}

/*
 * Ermittle einen Schluessel von 0 bis 100, der
 * noch nicht belegt ist.
 */
function getFreeSpot(maxCookieNumer)
{
	for(var i=0; i<maxCookieNumer; i++)
	{
		if ( isCookieSet(i.toString()) == false ) return i;
	}
	return 101;
}