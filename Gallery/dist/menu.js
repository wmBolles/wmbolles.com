const menu=document.getElementById("menu"),ulMenu=document.getElementById("ulMenu");function menuToggle(){menu.classList.toggle("h-32")}function menuResize(){let e=window.innerWidth||document.body.clientWidth;e>640&&menu.classList.remove("h-32")}window.addEventListener("resize",menuResize);