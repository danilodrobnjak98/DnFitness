function komentar() {
    let komentar=document.getElementById("komm").value;

    if(komentar=="") return;

    let komentari=localStorage.getItem("dn");
    komentari+=(komentar+"|");
 
    localStorage.setItem("dn", komentari);
  
   
    ispiss();
    let ocena=document.getElementById("ocena").value;
    //alert(ocena);
    ocena=parseInt(ocena);

    let prosecna=localStorage.getItem("ocena4");
    prosecna1=parseInt(prosecna);
    
    
    let ukupno=localStorage.getItem("broj4");
    ukupno1=parseInt(ukupno);
        
    prosecna1=prosecna1*ukupno+ocena;
    
    ukupno1++;
    
    
    
    prosecna1=prosecna1/ukupno1;
   
    
    localStorage.setItem("broj4", ukupno1);
    localStorage.setItem("ocena4", prosecna1);
    

    
   ispiss();

    
    
}
function ispiss() {
    
   ocena();

  //  if(localStorage.getItem("astanga")==null)  localStorage.clear();
 
      let  nesta=localStorage.getItem("dn");
      nesta=nesta.replace("null","\n");
         document.getElementById("komentari").innerHTML=nesta;
        

      

    
}
function brisi() {
      localStorage.clear();
      document.getElementById("komm").value="";
     
}
function ocena() {
    let pom=localStorage.getItem("broj4");
    
    if(pom==null){
        localStorage.setItem("broj4",1);
        localStorage.setItem("ocena4",3);
       
    }
    document.getElementById("ocenaA").innerHTML=localStorage.getItem("ocena4");

}