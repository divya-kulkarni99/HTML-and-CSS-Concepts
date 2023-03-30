"use strict";
(function() {
    const menuEl = document.querySelector(".hamburger");
    const listEl = document.querySelector(".menubar__unorderedlist");
    const formEl = document.querySelector('.register');
    const emailEl = document.querySelector('.register__email');
    const confirmEl = document.querySelector('.register__confirmemail');
    const confirmlabelEl = document.querySelector('.register__confirm-text');
    const emaillabelEl = document.querySelector('.register__email-text');
    

    menuEl.addEventListener("click", function(){
        listEl.classList.toggle("active");
    });

   const modalEl1 = document.querySelector('.modal__card1');
   const openEl1 = document.querySelector('.open__card1');
   const closeEl1 = document.querySelector('.close__card1');
   const modalEl2 = document.querySelector('.modal__card2');
   const openEl2 = document.querySelector('.open__card2');
   const closeEl2 = document.querySelector('.close__card2');
   const modalEl3 = document.querySelector('.modal__card3');
   const openEl3 = document.querySelector('.open__card3');
   const closeEl3 = document.querySelector('.close__card3');
   const modalEl4 = document.querySelector('.modal__card4');
   const openEl4 = document.querySelector('.open__card4');
   const closeEl4 = document.querySelector('.close__card4');
   const modalEl5 = document.querySelector('.modal__card5');
   const openEl5 = document.querySelector('.open__card5');
   const closeEl5 = document.querySelector('.close__card5');
   const modalEl6 = document.querySelector('.modal__card6');
   const openEl6 = document.querySelector('.open__card6');
   const closeEl6 = document.querySelector('.close__card6');
   
openEl1.addEventListener('click', () =>{
    modalEl1.showModal();
});
closeEl1.addEventListener('click', () =>{
    modalEl1.close();
    
});

openEl2.addEventListener('click', () =>{
    modalEl2.showModal();
});
closeEl2.addEventListener('click', () =>{
    modalEl2.close();
    
});

openEl3.addEventListener('click', () =>{
    modalEl3.showModal();
});
closeEl3.addEventListener('click', () =>{
    modalEl3.close();
    
});

openEl4.addEventListener('click', () =>{
    modalEl4.showModal();
});
closeEl4.addEventListener('click', () =>{
    modalEl4.close();
    
});

openEl5.addEventListener('click', () =>{
    modalEl5.showModal();
});
closeEl5.addEventListener('click', () =>{
    modalEl5.close();
    
});

openEl6.addEventListener('click', () =>{
    modalEl1.showModal();
});
closeEl6.addEventListener('click', () =>{
    modalEl6.close();
    
});

  
  
        formEl.addEventListener('submit', (event) =>{
    
            if(!emailEl.value){
                emaillabelEl.innerText = "This field is required" ;
                event.preventDefault();
            }
            
            if( emailEl.value !== confirmEl.value ){
                confirmlabelEl.innerText = "This field must match the provided email address" ;
                event.preventDefault();
            }
            if(emailEl.value.indexOf('@') == -1){
                emaillabelEl.innerText = "This field be a valid email address including a @" ;
                event.preventDefault();
             }
            else{
                emaillabelEl.innerText = "" ;
                
            }
            if(!confirmEl.value){
                confirmlabelEl.innerText = "This field must match the provided email address" ;
                event.preventDefault();
             }
            
             if( emailEl.value !== confirmEl.value ){
                confirmlabelEl.innerText = "This field must match the provided email address" ;
                event.preventDefault();
             }
             
             else{
                confirmlabelEl.innerText = "" ;
                
             }
            
        });
        emailEl.addEventListener('input', (event) =>{
        if(!emailEl.value){
            emaillabelEl.innerText = "This field is required" ;
            event.preventDefault();
        }
        if(emailEl.value.indexOf('@') == -1){
            emaillabelEl.innerText = "This field be a valid email address including a @" ;
            event.preventDefault();
         }
        if( emailEl.value !== confirmEl.value ){
            confirmlabelEl.innerText = "This field must match the provided email address" ;
            event.preventDefault();
         }
         else{
            emaillabelEl.innerText = "" ;
            
         }
         if(!confirmEl.value){
            confirmlabelEl.innerText = "This field must match the provided email address" ;
            event.preventDefault();
         }
        
         if( emailEl.value !== confirmEl.value ){
            confirmlabelEl.innerText = "This field must match the provided email address" ;
            event.preventDefault();
         }
         
         else{
            confirmlabelEl.innerText = "" ;
            
         }
        });
    
        confirmEl.addEventListener('input', (event) =>{

         if(!confirmEl.value){
            confirmlabelEl.innerText = "This field must match the provided email address" ;
            event.preventDefault();
         }
        
         if( emailEl.value !== confirmEl.value ){
            confirmlabelEl.innerText = "This field must match the provided email address" ;
            event.preventDefault();
         }
         
         else{
            confirmlabelEl.innerText = "" ;
            
         }
        });

  
})();