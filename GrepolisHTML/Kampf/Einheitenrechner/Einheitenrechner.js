function init()
{
   document.Form1.schwerti.value = 0;
   document.Form1.bogi.value = 0;
   document.Form1.hoplit.value = 0;
   document.Form1.streitwagen.value = 0;
   document.Form1.reiter.value = 0;
   document.Form1.schleuderer.value = 0;
   document.Form1.miliz.value = 0;
}

function berechneWerteDerAbwehr()
{   
      var SchwertkaempferVSchlag=14;
	  var SchwertkaempferVStich=8;
	  var SchwertkaempferVFern=30;
	  var SchwertkaempferKosten=95+85;
	  var SchwertkaempferFarm=1;
	  
	  var HoplitA = 16;
	  var HoplitVSchlag=18;
	  var HoplitVStich=12;
	  var HoplitVFern=7;
	  var HoplitKosten=75+150;
	  var HoplitFarm=1;
	  
	  var BogiVSchlag=6;
	  var BogiVStich=25;
	  var BogiVFern=12;
	  var BogiKosten=120+75;//120+75;
	  var BogiFarm=1;
	  
	  var StreitA=56;
	  var StreitVSchlag=76;
	  var StreitVStich=16;
	  var StreitVFern=56;
	  var StreitKosten=200+440+320;//120+75;
	  var StreitFarm=4;
	  
	  var MilizVSchlag=6;
	  var MilizVStich=8;
	  var MilizVFern=4;
	  var MilizKosten=0;
	  
	  var ReiterVSchlag = 18;
	  var ReiterVStich  = 1;
	  var ReiterVFern = 24;
	  var ReiterA=55;
	  var ReiterKosten=240+120+360;//216+108+324;
	  var ReiterFarm=3;
	  
	  var SchleudererVSchlag = 7;
	  var SchleudererVStich = 8;
	  var SchleudererVFern = 2;
	  var SchleudererA=23;
	  var SchleudererKosten=55+100+40;//49.5+90+36;
	  var SchleudererFarm=1;
        
          var anzSchwerti = parseFloat(document.Form1.schwerti.value);
          var anzBogi = parseFloat(document.Form1.bogi.value);
          var anzHoplit = parseFloat(document.Form1.hoplit.value);
          var anzStreitwagen = parseFloat(document.Form1.streitwagen.value);
          var anzReiter = parseFloat(document.Form1.reiter.value);
          var anzSchleuderer = parseFloat(document.Form1.schleuderer.value);
          var anzMiliz = parseFloat(document.Form1.miliz.value);
          
          var bashpunkte = anzSchwerti + anzBogi + anzHoplit + anzStreitwagen * 4 + anzReiter * 3 + anzSchleuderer;
          
          var VStich = anzSchwerti*SchwertkaempferVStich + anzBogi*BogiVStich + anzHoplit*HoplitVStich + anzStreitwagen*StreitVStich + anzReiter*ReiterVStich + anzSchleuderer*SchleudererVStich + anzMiliz*MilizVStich; 
          var bHopliten = VStich/HoplitA;
          var rHoplit = bHopliten*HoplitKosten;
          var bStreit = VStich/StreitA;
          var rStreit = bStreit*StreitKosten;
          
          var VSchlag = anzSchwerti*SchwertkaempferVSchlag + anzBogi*BogiVSchlag + anzHoplit*HoplitVSchlag + anzStreitwagen*StreitVSchlag + anzReiter*ReiterVSchlag + anzSchleuderer*SchleudererVSchlag + anzMiliz*MilizVSchlag; 
          var bReiter = VSchlag/ReiterA;
          var rReiter = bReiter*ReiterKosten;
          
          var VFern = anzSchwerti*SchwertkaempferVFern + anzBogi*BogiVFern + anzHoplit*HoplitVFern + anzStreitwagen*StreitVFern + anzReiter*ReiterVFern + anzSchleuderer*SchleudererVFern + anzMiliz*MilizVFern;
          var bSchleuderer = VFern/SchleudererA;
          var rSchleuderer = bSchleuderer*SchleudererKosten;
          
          document.Form1.bashpunkte.value = bashpunkte;

          document.Form1.kostenVert.value = anzSchwerti*180+anzBogi*195+anzHoplit*225+anzStreitwagen*960+anzReiter*720+anzSchleuderer*195;
          
          document.Form1.VStich.value = VStich;
          document.Form1.bHopliten.value = bHopliten;
          document.Form1.rHoplit.value = rHoplit;
          document.Form1.bStreit.value = bStreit;
          document.Form1.rStreit.value = rStreit;
          
          document.Form1.VSchlag.value = VSchlag;
          document.Form1.bReiter.value = bReiter;
          document.Form1.rReiter.value = rReiter;
          
          document.Form1.VFern.value = VFern;
          document.Form1.bSchleuderer.value = bSchleuderer;
          document.Form1.rSchleuderer.value = rSchleuderer;

}