var niz=[];
var treninzi=[];
function tip() {
  
  let joga,pilates,core,cardio;
  joga=document.getElementById("joga").checked;
  pilates=document.getElementById("pilates").checked;
  core=document.getElementById("core").checked;
  cardio=document.getElementById("cardio").checked;


  if (joga==true) {
    azurirajTipove('joga');
    return;
  }
  if (pilates==true) {
    azurirajTipove('pilates');
  }
  if (core==true) {
    azurirajTipove('core');
  }
  if (cardio==true) {
    azurirajTipove('cardio');
  }
   

}
function azurirajTipove(tip) {

  if (tip=='joga') {
    document.getElementById("11").innerHTML="Prental joga";
    document.getElementById("12").innerHTML="Kraljevska joga";
    document.getElementById("13").innerHTML="Astanga joga";
    document.getElementById("14").innerHTML="Karma joga";
  }
   if (tip=='pilates') {
    document.getElementById("11").innerHTML="Stott pilates";
    document.getElementById("12").innerHTML="Klasični pilates";
    document.getElementById("13").innerHTML="Reformer pilates";
    document.getElementById("14").innerHTML="Tradicionalni pilates";
   }
   if (tip=='core') {
    document.getElementById("11").innerHTML="Body attack";
    document.getElementById("12").innerHTML="Core burn";
    document.getElementById("13").innerHTML="Dynamic core";
    document.getElementById("14").innerHTML="DN core";
   }
   if (tip=='cardio') {
    document.getElementById("11").innerHTML="Battle ropes";
    document.getElementById("12").innerHTML="Tabata cardio";
    document.getElementById("13").innerHTML="Kik boks";
    document.getElementById("14").innerHTML="Zumba";
   }
}
function tipovi() {
  let prvi=document.getElementById("1").checked;
  let drugi=document.getElementById("2").checked;
  let treci=document.getElementById("3").checked;
  let cetvrti=document.getElementById("4").checked;

    if (prvi==false && drugi==false && treci==false && cetvrti==false) {
        alert("Niste odabrali tip treninga!");
        return;
        
    }
    if (prvi==true) {
      tip="prvi";
    }
    if (drugi==true) {
      tip="drugi";
    }
    if (treci==true) {
      tip="treci";
    }
    if (cetvrti==true) {
      tip="cetvrti";
    }

   let joga,pilates,core,cardio;
    ulazak=false;
   joga=document.getElementById("joga").checked;
   pilates=document.getElementById("pilates").checked;
   core=document.getElementById("core").checked;
   cardio=document.getElementById("cardio").checked;

   
   let trening;


    niz.length=0;


    if (joga==true) {
      jogaRezervacija(tip);

      trening="joga";
    }
    if (pilates==true) {
        trening="pilates";
        pilatesRezervacija(tip);
       
    }
    if (core==true) {
      trening="core";
      coreRezervacija(tip);

     
    }
    if (cardio==true) {
      trening="cardio";
      cardioRezervacija(tip);
     
    }

    obj={
      trening:trening,
      tip:tip
    }
    niz.push(obj);

    


}
function jogaRezervacija(tip) {
  if (tip=="prvi") {//Prental Joga
    document.getElementById("vreme1").innerHTML="10:00";
    document.getElementById("rez1").innerHTML="Rezerviši";

    document.getElementById("vreme3").innerHTML="10:00";
    document.getElementById("rez3").innerHTML="Rezerviši";

    document.getElementById("vreme5").innerHTML="10:00";
    document.getElementById("rez5").innerHTML="Rezerviši";
  }
  if (tip=="drugi") { //Kraljevska joga
    document.getElementById("vreme1").innerHTML="11:00";
    document.getElementById("rez1").innerHTML="Rezerviši";

    document.getElementById("vreme3").innerHTML="11:00";
    document.getElementById("rez3").innerHTML="Rezerviši";

    document.getElementById("vreme5").innerHTML="11:00";
    document.getElementById("rez5").innerHTML="Rezerviši";
    
  }
  if (tip=="treci") {
    document.getElementById("vreme1").innerHTML="12:00";
    document.getElementById("rez1").innerHTML="Rezerviši";

    document.getElementById("vreme3").innerHTML="12:00";
    document.getElementById("rez3").innerHTML="Rezerviši";

    document.getElementById("vreme5").innerHTML="12:00";
    document.getElementById("rez5").innerHTML="Rezerviši";
    
  }
  if (tip=="cetvrti") {
    document.getElementById("vreme1").innerHTML="13:00";
    document.getElementById("rez1").innerHTML="Rezerviši";

    document.getElementById("vreme3").innerHTML="13:00";
    document.getElementById("rez3").innerHTML="Rezerviši";

    document.getElementById("vreme5").innerHTML="13:00";
    document.getElementById("rez5").innerHTML="Rezerviši";
  }
}
function pilatesRezervacija(tip) {
  if (tip=="prvi") {
    document.getElementById("vreme2").innerHTML="14:00";
    document.getElementById("rez2").innerHTML="Rezerviši";

    document.getElementById("vreme3").innerHTML="14:00";
    document.getElementById("rez3").innerHTML="Rezerviši";

    document.getElementById("vreme4").innerHTML="14:00";
    document.getElementById("rez4").innerHTML="Rezerviši";
  }
  if (tip=="drugi") { 
    document.getElementById("vreme2").innerHTML="15:00";
    document.getElementById("rez2").innerHTML="Rezerviši";

    document.getElementById("vreme3").innerHTML="15:00";
    document.getElementById("rez3").innerHTML="Rezerviši";

    document.getElementById("vreme4").innerHTML="15:00";
    document.getElementById("rez4").innerHTML="Rezerviši";
    
  }
  if (tip=="treci") {
    document.getElementById("vreme2").innerHTML="16:00";
    document.getElementById("rez2").innerHTML="Rezerviši";

    document.getElementById("vreme3").innerHTML="16:00";
    document.getElementById("rez3").innerHTML="Rezerviši";

    document.getElementById("vreme4").innerHTML="16:00";
    document.getElementById("rez4").innerHTML="Rezerviši";
    
  }
  if (tip=="cetvrti") {
    document.getElementById("vreme2").innerHTML="17:00";
    document.getElementById("rez2").innerHTML="Rezerviši";

    document.getElementById("vreme3").innerHTML="17:00";
    document.getElementById("rez3").innerHTML="Rezerviši";

    document.getElementById("vreme4").innerHTML="17:00";
    document.getElementById("rez4").innerHTML="Rezerviši";
  }
}
function coreRezervacija(tip) {
  if (tip=="prvi") {
    document.getElementById("vreme1").innerHTML="18:00";
    document.getElementById("rez1").innerHTML="Rezerviši";

    document.getElementById("vreme6").innerHTML="18:00";
    document.getElementById("rez6").innerHTML="Rezerviši";

    document.getElementById("vreme7").innerHTML="18:00";
    document.getElementById("rez7").innerHTML="Rezerviši";
  }
  if (tip=="drugi") { 
    document.getElementById("vreme1").innerHTML="19:00";
    document.getElementById("rez1").innerHTML="Rezerviši";

    document.getElementById("vreme6").innerHTML="19:00";
    document.getElementById("rez6").innerHTML="Rezerviši";

    document.getElementById("vreme7").innerHTML="19:00";
    document.getElementById("rez7").innerHTML="Rezerviši";
    
  }
  if (tip=="treci") {
    document.getElementById("vreme1").innerHTML="20:00";
    document.getElementById("rez1").innerHTML="Rezerviši";

    document.getElementById("vreme6").innerHTML="20:00";
    document.getElementById("rez6").innerHTML="Rezerviši";

    document.getElementById("vreme7").innerHTML="20:00";
    document.getElementById("rez7").innerHTML="Rezerviši";
    
  }
  if (tip=="cetvrti") {
    document.getElementById("vreme1").innerHTML="21:00";
    document.getElementById("rez1").innerHTML="Rezerviši";

    document.getElementById("vreme6").innerHTML="21:00";
    document.getElementById("rez6").innerHTML="Rezerviši";

    document.getElementById("vreme7").innerHTML="21:00";
    document.getElementById("rez7").innerHTML="Rezerviši";
  }
}
function cardioRezervacija(tip) {
  if (tip=="prvi") {
    document.getElementById("vreme2").innerHTML="18:00";
    document.getElementById("rez2").innerHTML="Rezerviši";

    document.getElementById("vreme3").innerHTML="18:00";
    document.getElementById("rez3").innerHTML="Rezerviši";

    document.getElementById("vreme5").innerHTML="18:00";
    document.getElementById("rez5").innerHTML="Rezerviši";
  }
  if (tip=="drugi") { 
    document.getElementById("vreme2").innerHTML="19:00";
    document.getElementById("rez2").innerHTML="Rezerviši";

    document.getElementById("vreme3").innerHTML="19:00";
    document.getElementById("rez3").innerHTML="Rezerviši";

    document.getElementById("vreme5").innerHTML="19:00";
    document.getElementById("rez5").innerHTML="Rezerviši";
    
  }
  if (tip=="treci") {
    document.getElementById("vreme2").innerHTML="20:00";
    document.getElementById("rez2").innerHTML="Rezerviši";

    document.getElementById("vreme3").innerHTML="20:00";
    document.getElementById("rez3").innerHTML="Rezerviši";

    document.getElementById("vreme5").innerHTML="20:00";
    document.getElementById("rez5").innerHTML="Rezerviši";
    
  }
  if (tip=="cetvrti") {
    document.getElementById("vreme2").innerHTML="21:00";
    document.getElementById("rez2").innerHTML="Rezerviši";

    document.getElementById("vreme3").innerHTML="21:00";
    document.getElementById("rez3").innerHTML="Rezerviši";

    document.getElementById("vreme5").innerHTML="21:00";
    document.getElementById("rez5").innerHTML="Rezerviši";
  }
}

function rezervisi(clickedEl) {
  if(clickedEl.innerHTML=="Poništi") {
    
   
    //  dan=clickedEl.id;
     // document.getElementById(dan).innerHTML="Poništi";
      content=clickedEl.textContent;
      
     
      /*
      if (content=="") {
        alert("Null je");
      }
      */
      cifra="vreme"+dan.charAt(3);
      vreme=document.getElementById(cifra).textContent;
      
      
      danNedelji=cifra;
      //radi sve super do ovde
     //koji je cekiran
  
     if (document.getElementById("joga").checked) {
        TRENING="joga";
     }
     if (document.getElementById("pilates").checked) {
      TRENING="pilates";
    }
    if (document.getElementById("core").checked) {
    TRENING="core";
    }
    if (document.getElementById("cardio").checked) {
    TRENING="cardio";
    }
    
  
  
    if (document.getElementById("1").checked) {
        tipp="prvi";
    }
    if (document.getElementById("2").checked) {
      tipp="drugi";
  }
  
  if (document.getElementById("3").checked) {
    tipp="treci";
  }
  
  if (document.getElementById("4").checked) {
    tipp="cetvrti";
  }
  
  
  
  
  
  
     //end koji je cekiran
  
      //trening=niz[0].trening;
      //tip=niz[0].tip;
  
      //TIP=pronadjiTip(trening,tip);
    TIP=pronadjiTip(TRENING,tipp);
    var k = parseInt(localStorage.getItem("ukupnozakazivanja"));
    for(var i=1; i<=k; i++) {
      if(localStorage.getItem("tip"+i)==TIP) {
        localStorage.setItem("tip"+i, "");
        localStorage.setItem("dan"+i, "");
        localStorage.setItem("vreme"+i, "");

      }
    }
  }
  if(clickedEl.innerHTML=="Rezerviši") {
   
    dan=clickedEl.id;
    document.getElementById(dan).innerHTML="Poništi";
    content=clickedEl.textContent;
    
   
    /*
    if (content=="") {
      alert("Null je");
    }
    */
    cifra="vreme"+dan.charAt(3);
    vreme=document.getElementById(cifra).textContent;
    
    
    danNedelji=cifra;
    //radi sve super do ovde
   //koji je cekiran

   if (document.getElementById("joga").checked) {
      TRENING="joga";
   }
   if (document.getElementById("pilates").checked) {
    TRENING="pilates";
  }
  if (document.getElementById("core").checked) {
  TRENING="core";
  }
  if (document.getElementById("cardio").checked) {
  TRENING="cardio";
  }
  


  if (document.getElementById("1").checked) {
      tipp="prvi";
  }
  if (document.getElementById("2").checked) {
    tipp="drugi";
}

if (document.getElementById("3").checked) {
  tipp="treci";
}

if (document.getElementById("4").checked) {
  tipp="cetvrti";
}






   //end koji je cekiran

    //trening=niz[0].trening;
    //tip=niz[0].tip;

    //TIP=pronadjiTip(trening,tip);
  TIP=pronadjiTip(TRENING,tipp);
  
  
  /*  objekat = {
      tip: TIP,
      dan : danNedelji,
      vremeDesavanja : vreme
    } */
    //alert(objekat.tip); alert(objekat.dan); alert(objekat.vremeDesavanja);
    let k=parseInt(localStorage.getItem('ukupnozakazivanja'));
    k++;
    localStorage.setItem('ukupnozakazivanja',k);
    localStorage.setItem('tip'+k, TIP);
    switch(danNedelji) {
      case "vreme1": day="Ponedeljak"; break;
      case "vreme2": day="Utorak"; break;;
      case "vreme3": day="Sreda"; break;
      case "vreme4": day="Cetvrtak"; break;
      case "vreme5": day="Petak"; break;
      case "vreme6": day="Subota"; break;
      case "vreme7": day="Nedelja"; break;
    }
    localStorage.setItem('dan'+k, day);
    localStorage.setItem('vreme'+k, vreme);
    
  }
  
  
  
  
    
    
    
    
    
    
    
    // localStorage.setItem('zakazivanje', JSON.stringify(treninzi));
   // alert(treninzi[0].tip);
}



function pronadjiTip(trening,tip) {
  if (trening=="joga") {

    if (tip=="prvi") {
      return "Prental joga";
    }
    if (tip=="drugi") {
      return "Kraljevska joga";
    }
    if (tip=="treci") {
      return "Astanga joga";
    }
    if (tip=="cetvrti") {
      return "Karma joga";
    }
    


  }

  if (trening=="pilates") {
    if (tip=="prvi") {
      return "Stott pilates";
    }
    if (tip=="drugi") {
      return "Klasicni pilates";
    }
    if (tip=="treci") {
      return "Reformer pilates";
    }
    if (tip=="cetvrti") {
      return "Tradicionalni pilates";
    }
  }
  if (trening=="core") {
    if (tip=="prvi") {
      return "Body attack";
    }
    if (tip=="drugi") {
      return "Core burn";
    }
    if (tip=="treci") {
      return "Dynamic core";
    }
    if (tip=="cetvrti") {
      return "DN core";
    }
  }
  if (trening=="cardio") {
    if (tip=="prvi") {
      return "Battle ropes";
    }
    if (tip=="drugi") {
      return "Tabata cardio";
    }
    if (tip=="treci") {
      return "Kik boks";
    }
    if (tip=="cetvrti") {
      return "Zumba";
    }
  }
  
}
//function ucitavanjeNaloga() {
 // zakaz= localStorage.getItem('zakazivanje');
 //alert(zakaz);
  
  /*
  for (let i = 0; i < zakaz.length; i+=3) {
     geter=i+1;
     geter+="p";
      document.getElementById(geter).innerHTML=zakaz[i].tip;
    
    geter2=i+2;
    geter2+="p";
    document.getElementById(geter2).innerHTML=zakaz[i].dan;

    geter3=i+3;
    geter3+="p";
    document.getElementById(geter3).innerHTML=zakaz[i].vremeDesavanja;
    
  }
  */
 /*let res=zakaz.split(",");
let i=0;
let indeks=0;
  while (i<res.length) {
   resnew=res[i].split(":");
    tip=resnew[1];
    tip=tip.replace('"','');
    tip=tip.replace('"','');

   // alert(tip);
    geter=indeks+1;
    geter+="p";
    document.getElementById(geter).innerHTML=tip;

    resnew=res[i+1].split(":");
    dan=resnew[1];
    dan.replace('"','');

    geter2=indeks+2;
    geter2+="p";
    dan=nadjiDan(dan);
    document.getElementById(geter2).innerHTML=dan;

    resnew=res[i+2].split(":");
    vreme=resnew[1];
    vreme=vreme.replace('"','');

    geter3=indeks+3;
    geter3+="p";
    document.getElementById(geter3).innerHTML=vreme+":00";


    i+=3;
    indeks+=3;
  } 


} */
function nadjiDan(dan) {
  dan=dan.replace('"','');
  dan=dan.replace('"','');

  if (dan=="vreme1") {
    return "Ponedeljak";
  }
  if (dan=="vreme2") {
    return "Utorak";
  }
  if (dan=="vreme3") {
    return "Sreda";
  }
  if (dan=="vreme4") {
    return "Cetvrtak";
  }
  if (dan=="vreme5") {
    return "Petak";
  }
  if (dan=="vreme6") {
    return "Subota";
  }
  if (dan=="vreme7") {
    return "Nedelja";
  }
}



function kreiraj_pdf() {
  var doc = new jsPDF();
  let ime = document.getElementById("ime").value;
  let email = document.getElementById("email").value;
  let broj = document.getElementById("broj").value;
  let datum = document.getElementById("datum_rodjenja").value;
  let problem = document.getElementById("a").value;

  let ukupno =
    "Ime i prezime: " +
    ime +
    "\nE-mail: " +
    email +
    "\nBroj telefona: " +
    broj +
    "\nDatum rodjenja: " +
    datum +
    "\nOpis problema: " +
    problem;
  doc.text(ukupno, 10, 10);
  doc.save("masaze.pdf");
}

function ucitajzakazivanja() {
  //localStorage.clear();
  if(localStorage.getItem('ukupnozakazivanja')==null) localStorage.setItem('ukupnozakazivanja',0);
  }
  function ispis() {
  
    var k = parseInt(localStorage.getItem("ukupnozakazivanja"));
    
    for(var i = 1; i <= k; i++){
      document.getElementById("tip"+i).innerHTML=localStorage.getItem('tip'+i);
      document.getElementById("datum"+i).innerHTML=localStorage.getItem('dan'+i);
      document.getElementById("vreme"+i).innerHTML=localStorage.getItem('vreme'+i);
      

    }
  }

