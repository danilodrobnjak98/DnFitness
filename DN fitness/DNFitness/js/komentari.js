function komentar() {
    let komentar=document.getElementById("komm").value;

    if(komentar=="") return;

    let komentari=localStorage.getItem("astanga");
    komentari+=(komentar+"|");
 
    localStorage.setItem("astanga", komentari);
  
   
    ispiss();
    let ocena=document.getElementById("ocena").value;
    ocena=parseInt(ocena);
    let prosecna=localStorage.getItem("ocena");
    prosecna1=parseInt(prosecna);
   
    
    let ukupno=localStorage.getItem("broj");
    ukupno1=parseInt(ukupno);
        
    prosecna1=prosecna1*ukupno+ocena;
    
    ukupno1++;
    
    
    
    prosecna1=prosecna1/ukupno1;
   
    
    localStorage.setItem("broj", ukupno1);
    localStorage.setItem("ocena", prosecna1);
    

    
   ispiss();

    
    
}
function ispiss() {
   ocena();

  //  if(localStorage.getItem("astanga")==null)  localStorage.clear();
 
      let  nesta=localStorage.getItem("astanga");
      nesta=nesta.replace("null","\n");
         document.getElementById("komentari").innerHTML=nesta;
        

      

    
}
function brisi() {
      localStorage.clear();
      document.getElementById("komm").value="";
     
}
function ocena() {
    let pom=localStorage.getItem("broj");
    
    if(pom==null){
        localStorage.setItem("broj",1);
        localStorage.setItem("ocena",3);
       
    }
    document.getElementById("ocenaA").innerHTML=localStorage.getItem("ocena");

}