function init()
{
    document.Form1.schwerti.value = 0;
    document.Form1.bogi.value = 0;
    document.Form1.hoplit.value = 0;
    document.Form1.streitwagen.value = 0;
    document.Form1.reiter.value = 0;
    document.Form1.schleuderer.value = 0;
}

function analysiereAngriff()
 {
	  var SchwertA=5; //schlag
	  var SchwertFarm=1;
	  var SchwertRes=180;
	  
	  var HoplitA = 16; //stich
	  var HoplitFarm=1;
	  var HoplitRes=225;
	  
	  var BogiA=8; //fern
	  var BogiFarm=1;
	  var BogiRes=195;
	  
	  var StreitA=56; //stich
	  var StreitFarm=4;
	  var StreitRes=960;
	  
	  var ReiterA=55; //schlag
	  var ReiterFarm=3;
	  var ReiterRes=720;
	  
	  var SchleudererA=23; //fern
	  var SchleudererFarm=1;
	  var SchleudererRes=195;
        
      var anzSchwerti = parseFloat(document.Form1.schwerti.value);
      var anzBogi = parseFloat(document.Form1.bogi.value);
      var anzHoplit = parseFloat(document.Form1.hoplit.value);
      var anzStreitwagen = parseFloat(document.Form1.streitwagen.value);
      var anzReiter = parseFloat(document.Form1.reiter.value);
      var anzSchleuderer = parseFloat(document.Form1.schleuderer.value);

	  var ASchlag = anzSchwerti * SchwertA + anzReiter * ReiterA;
	  var AStich =  anzHoplit*HoplitA + anzStreitwagen*StreitA;
	  var AFern = anzSchleuderer*SchleudererA + anzBogi*BogiA;

	  var Res = anzSchwerti*SchwertRes + anzReiter*ReiterRes +
		    anzHoplit*HoplitRes + anzStreitwagen*StreitRes
	            +anzSchleuderer*SchleudererRes + anzBogi*BogiRes;

	  document.Form1.AStich.value = AStich;
	  document.Form1.AFern.value = AFern;
	  document.Form1.ASchlag.value = ASchlag; 
 
	  document.Form1.Res.value = Res;
	  document.Form1.bashpunkte.value = SchwertFarm*anzSchwerti + anzBogi*BogiFarm + anzHoplit*HoplitFarm + anzStreitwagen*StreitFarm + anzReiter*ReiterFarm + anzSchleuderer*SchleudererFarm;

}