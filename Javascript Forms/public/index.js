"use strict";
(function(){
     
    const formEl = document.querySelector('.register');
    const nameEl = document.querySelector(".register__name-input");
    const nameErrorEl = document.querySelector(".register__name-error");
    const emailEl = document.querySelector('.register__email');
    const confirmEl = document.querySelector('.register__confirmemail');
    const confirmlabelEl = document.querySelector('.register__confirm-text');
    
    nameEl.addEventListener('input', (event) => {
        let isnameInvalid = false;
        nameErrorEl.classList.remove("register__name--invalid");
        if(!nameEl.value){
            nameErrorEl.classList.add("register__name--invalid");
            isnameInvalid = true;
        }
        if(isnameInvalid){
            event.preventDefault();
        }
         
    });
 
    formEl.addEventListener('submit', (event) =>{
        let isInvalid = false;
        nameErrorEl.classList.remove("register__name--invalid");
    
        if(!nameEl.value){
            nameErrorEl.classList.add("register__name--invalid");
            isInvalid = true;
        }
        if(isInvalid){
            event.preventDefault();
        }

        if( emailEl.value !== confirmEl.value){
            confirmlabelEl.innerText = "Does not match" ;
            event.preventDefault();
        }
        else{
            confirmlabelEl.innerText = "" ;
            
        }

        
    });

    confirmEl.addEventListener('input', (event) =>{
     if( emailEl.value !== confirmEl.value){
        confirmlabelEl.innerText = "Does not match" ;
        event.preventDefault();
     }
     else{
        confirmlabelEl.innerText = "" ;
        
     }
    });
  
})();
