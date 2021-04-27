/********************************************************
*	What is happening?
*	Some external JS
**********************************************************/


//********************************************************
// Starts when the button gets pressed:

function openREGISTER(){
   [PATENTCOUNTRY,PATENTNUMBER]=getData();
   redirect2Register();
}
//********************************************************


//********************************************************
// Get the PatentNumber and PatentCountry

function getData(){
 
   // DEFINITION OF VARIABLES
     //country code (first to letters) saved in UPPERCASE letters.
     var PATENTCOUNTRY = window.location.search.split("=")[1].toUpperCase().substring(0,2);

     // trim any whitespace at end and kindcode letters "U","B","C"
     var PATENTNUMBER = window.location.search.split("=")[1].trim().substring(2).replace(/(U,B,C,T)/g, "")
return [PATENTCOUNTRY, PATENTNUMBER]
}
//********************************************************

//********************************************************
// see redirectME()

function redirect2Register(){
	if (PATENTCOUNTRY == "EP" || PATENTCOUNTRY == "WO"){ // EP or WO => GO TO EPO REGISTER.
    	   //location.replace("https://register.epo.org/advancedSearch?" + "&lng=de&pn="+ PATENTCOUNTRY + PATENTNUMBER + "&tab=doclist");
			window.open("https://register.epo.org/advancedSearch?" + "&lng=de&pn="+ PATENTCOUNTRY + PATENTNUMBER + "&tab=doclist");
	}
	else if (PATENTCOUNTRY == "DE"){	// DE => Prüfziffer + Depatisnet
                var PRÜFZIFFER=modulo11(PATENTNUMBER);
			window.open("https://register.dpma.de/DPMAregister/pat/register?" + "AKZ=" + PATENTNUMBER + PRÜFZIFFER);
	}
	else if (PATENTCOUNTRY == "US"){ // US => two tabs!Open two tabs (EP-Register and USTPO)
			//window.open("https://globaldossier.uspto.gov/#/result/publication/"+ PATENTCOUNTRY+"/" + PATENTNUMBER+"/1", '1');
			window.open("https://worldwide.espacenet.com/publicationDetails/inpadocPatentFamily?" +
                "locale=de_EP&CC="+ PATENTCOUNTRY+"&NR=" + PATENTNUMBER, "_blank");	
	}
	else if (PATENTCOUNTRY == "SU" || PATENTCOUNTRY == "RU"){ // US => use YANDEX, the russian google...
	//https://www.epo.org/searching-for-patents/helpful-resources/asian/asia-updates/2019/20190305.html
	   window.open("https://yandex.ru/patents?&text="+ PATENTCOUNTRY + PATENTNUMBER, "_blank");	
	}
	else{ // OR Statement: Transfer to ESPACENET INPADOC
	   document.getElementById("dummy").innerHTML =("Work in progress...");
	   window.open("https://worldwide.espacenet.com/publicationDetails/inpadocPatentFamily?" +
                "locale=de_EP&CC="+ PATENTCOUNTRY+"&NR=" + PATENTNUMBER);
	}		
}
//********************************************************

//********************************************************
// Calculating the Prüfziffer for Depatisnet:
//
function modulo11(PATENTNUMBER){
var pnArrayRev=Array.from(PATENTNUMBER).reverse();
	var modulo11Array = [2,3,4,5,6,7,8,9,10,11,12,13];
	var y = 11;	// Moldulo 11
	
// Multiply both arrays.
	var pnSumme = 0;	//Initzialisieren
	for (var i=0; i<pnArrayRev.length;i++){
	 pnSumme += (pnArrayRev[i] * modulo11Array[i]);
	}	
// Multiplikationsergebnis divitiert durch 11. 
	var z = pnSumme / y;

// Rest von 11 abziehen --> Prüfziffer gemäß "Modulus 11"
	var pnRest = (pnSumme- (y * Math.floor(z)));

// Keine Prüfziffer mit 10 oder 11!
	if (pnRest==0) {var prüfziffer=0;}
	else {var prüfziffer = 11- pnRest; 
    	}

return prüfziffer
}
//********************************************************

function openESPACE(){
   [PATENTCOUNTRY,PATENTNUMBER]=getData();
   window.open("https://worldwide.espacenet.com/patent/search?&q=PN%3D"+PATENTCOUNTRY+PATENTNUMBER)
}

//********************************************************
function openGOOGLE(){
   [PATENTCOUNTRY,PATENTNUMBER]=getData();
   window.open("https://patents.google.com/?q="+PATENTCOUNTRY+PATENTNUMBER)
}

//********************************************************
function openPATENTSCOPE(){
   [PATENTCOUNTRY,PATENTNUMBER]=getData();
   window.open("https://patentscope.wipo.int/search/en/search.jsf?"+PATENTCOUNTRY+PATENTNUMBER)
}
