 
 function init()
 {
	 document.Form1.sekundenA.value = 0;
	 document.Form1.tageA.value = 0;
	 document.Form1.stundenA.value = 0;
	 document.Form1.minutenA.value = 0;
	 
	 document.Form2.sekundenB.value = 0;
	 document.Form2.tageB.value = 0;
	 document.Form2.stundenB.value = 0;
	 document.Form2.minutenB.value = 0;
 }
 
 function add()
 {
	 var vTageA = parseFloat(document.Form1.tageA.value);
	 var vStundenA = parseFloat(document.Form1.stundenA.value);
	 var vMinutenA = parseFloat(document.Form1.minutenA.value);
	 var vSekundenA = parseFloat(document.Form1.sekundenA.value);
	 
	 var vTageB = parseFloat(document.Form2.tageB.value);
	 var vStundenB = parseFloat(document.Form2.stundenB.value);
	 var vMinutenB = parseFloat(document.Form2.minutenB.value);
	 var vSekundenB = parseFloat(document.Form2.sekundenB.value);
 
	 document.Form3.sekundenC.value = vSekundenA+vSekundenB;
	 document.Form3.tageC.value = vTageA+vTageB;
	 document.Form3.stundenC.value = vStundenA+vStundenB;
	 document.Form3.minutenC.value = vMinutenA+vMinutenB;
	 
	 fixFormat();
 }
 
 function sub()
 {
	 var vTageA = parseFloat(document.Form1.tageA.value);
	 var vStundenA = parseFloat(document.Form1.stundenA.value);
	 var vMinutenA = parseFloat(document.Form1.minutenA.value);
	 var vSekundenA = parseFloat(document.Form1.sekundenA.value);
	 
	 var vTageB = parseFloat(document.Form2.tageB.value);
	 var vStundenB = parseFloat(document.Form2.stundenB.value);
	 var vMinutenB = parseFloat(document.Form2.minutenB.value);
	 var vSekundenB = parseFloat(document.Form2.sekundenB.value);
 
	 document.Form3.sekundenC.value = vSekundenA-vSekundenB;
	 document.Form3.tageC.value = vTageA-vTageB;
	 document.Form3.stundenC.value = vStundenA-vStundenB;
	 document.Form3.minutenC.value = vMinutenA-vMinutenB;
	 
	 fixFormat();
 }
 
 /*
  * Fix the format of the dates.
  */
 function fixFormat()
 {
	 var vTageC = parseInt(document.Form3.tageC.value);
	 var vStundenC = parseInt(document.Form3.stundenC.value);
	 var vMinutenC = parseInt(document.Form3.minutenC.value);
	 var vSekundenC = parseInt(document.Form3.sekundenC.value);
	 
	 var vTempSekunden = vSekundenC%60;
	 vMinutenC += (vSekundenC-vTempSekunden)/60;
	 vSekundenC = vTempSekunden;
	 
	 var vTempMinuten = vMinutenC%60;
	 vStundenC += (vMinutenC-vTempMinuten)/60;
	 vMinutenC = vTempMinuten;
	 
	 var vTempStunden = vStundenC%24;
	 vTageC += (vStundenC-vTempStunden)/24;
	 vStundenC = vTempStunden;
	 
	 document.Form3.sekundenC.value = vSekundenC;
	 document.Form3.tageC.value = vTageC;
	 document.Form3.stundenC.value = vStundenC;
	 document.Form3.minutenC.value = vMinutenC;
 }
 