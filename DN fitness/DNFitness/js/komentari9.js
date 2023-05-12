function komentar() {
    let komentar=document.getElementById("komm").value;

    if(komentar=="") return;

    let komentari=localStorage.getItem("trad");
    komentari+=(komentar+"|");
 
    localStorage.setItem("trad", komentari);
  
   
    ispiss();
    let ocena=document.getElementById("ocena").value;
    //alert(ocena);
    ocena=parseInt(ocena);

    let prosecna=localStorage.getItem("ocena9");
    prosecna1=parseInt(prosecna);
    
    
    let ukupno=localStorage.getItem("broj9");
    ukupno1=parseInt(ukupno);
        
    prosecna1=prosecna1*ukupno+ocena;
    
    ukupno1++;
    
    
    
    prosecna1=prosecna1/ukupno1;
   
    
    localStorage.setItem("broj9", ukupno1);
    localStorage.setItem("ocena9", prosecna1);
    

    
   ispiss();

    
    
}
function ispiss() {
    
   ocena();

  //  if(localStorage.getItem("astanga")==null)  localStorage.clear();
 
      let  nesta=localStorage.getItem("trad");
      nesta=nesta.replace("null","\n");
         document.getElementById("komentari").innerHTML=nesta;
        

      

    
}
function brisi() {
      localStorage.clear();
      document.getElementById("komm").value="";
     
}
function ocena() {
    let pom=localStorage.getItem("broj9");
    
    if(pom==null){
        localStorage.setItem("broj9",1);
        localStorage.setItem("ocena9",4);
       
    }
    document.getElementById("ocenaA").innerHTML=localStorage.getItem("ocena9");

}