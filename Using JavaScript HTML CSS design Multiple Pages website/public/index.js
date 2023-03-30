"use strict";
(function() {
    const menuEl = document.querySelector(".hamburger");
    const listEl = document.querySelector(".menubar__unorderedlist");

    menuEl.addEventListener("click", function(){
        listEl.classList.toggle("active");
    });
})();