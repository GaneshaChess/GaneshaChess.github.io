function berechneMoral()
 {
	  var PunkteVert = parseFloat(document.Form1.PunkteVert.value);
	  var PunkteAngr = parseFloat(document.Form1.PunkteAngr.value);
	  
      document.Form1.moral.value = ((PunkteVert/PunkteAngr) *3+0.3)*100;
 }