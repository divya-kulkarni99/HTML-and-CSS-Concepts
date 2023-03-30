"use strict";
(function(){
    const buttonEl1 = document.querySelector(".el1");
    const buttonEl2 = document.querySelector(".el2");
    const buttonEl3 = document.querySelector(".el3");

    const ulist1 = document.querySelector(".list1");
    const ulist2 = document.querySelector(".list2");
    const ulist3 = document.querySelector(".list3");

    buttonEl1.addEventListener("click", function(){
        ulist1.classList.toggle("active");
        console.log("Oh shoot");
    });

    buttonEl2.addEventListener("click", function(){
        ulist2.classList.toggle("active");
        console.log("Oh shoot");
    });

    buttonEl3.addEventListener("click", function(){
        ulist3.classList.toggle("active");
        console.log("Oh shoot");
    });
})();