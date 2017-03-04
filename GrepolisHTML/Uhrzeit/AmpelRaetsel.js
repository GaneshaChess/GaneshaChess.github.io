function zeigeUhrzeitAn()
{
	setInterval(function(){schreibeUhrzeit()},3000);
}

function schreibeUhrzeit()
{
	var zeitpunktA = new Date();
	document.write(zeitpunktA.toLocaleTimeString());
}

function test()
{
	alert("test");
}

function letzteAmpel(objectId)
{
	if ( objectId == "7" )
	{
		alert("Die letzte Ampel funktioniert nicht");
		return true;
	}
	return false;
}

function ersteAmpelEntsprichtRegeln(objectId)
{
	var farbe1 = document.getElementById(objectId).getAttribute("fill");
	var farbe2 = document.getElementById("2").getAttribute("fill");
	if ( objectId == "1" )
	{
		if ( farbe1 != farbe2 )
		{
			return true;
		}
		alert("Die erste und zweite Ampel können nicht gleichzeitig "+farbe1+" sein.");
		return false;
	}
	return false;
}

function dieAmpelnAlternieren(objectId)
{
	var mitte = parseInt(objectId);
	var links = parseInt(objectId)-1;
	var rechts = parseInt(objectId)+1;
	
	var farbeLinks = document.getElementById(links).getAttribute("fill");
	var farbeRechts = document.getElementById(rechts).getAttribute("fill");
	
	if ( farbeLinks != farbeRechts)
	{
		return true;
	}
	alert("Die vorherige und die nachfolgende Ampel müssen unterschiedliche Farben haben.");
	return false;
}

function schalteDieAmpelUm(objectId)
{
	var farbe = document.getElementById(objectId).getAttribute("fill");
	if ( farbe == "red" )
	{
		document.getElementById(objectId).setAttribute("fill","green");
	}
	else if (farbe == "green" )
	{
		document.getElementById(objectId).setAttribute("fill","red");
	}
}

function gebeZufallsfarbe()
{
	var x = Math.random();
	if ( x <= 0.5 ) return "green";
	else return "red";
}

function init()
{
	document.getElementById("1").setAttribute("fill",gebeZufallsfarbe());
	document.getElementById("2").setAttribute("fill",gebeZufallsfarbe());
	document.getElementById("3").setAttribute("fill",gebeZufallsfarbe());
	document.getElementById("4").setAttribute("fill",gebeZufallsfarbe());
	document.getElementById("5").setAttribute("fill",gebeZufallsfarbe());
	document.getElementById("6").setAttribute("fill",gebeZufallsfarbe());
	document.getElementById("7").setAttribute("fill",gebeZufallsfarbe());
}

function changeColor(objectId)
{
	if ( letzteAmpel(objectId) == false )
	{
		if ( ersteAmpelEntsprichtRegeln(objectId) == true )
		{
			schalteDieAmpelUm(objectId);
		}
		else if ( dieAmpelnAlternieren(objectId) == true )
		{
			schalteDieAmpelUm(objectId);
		}
	}
}