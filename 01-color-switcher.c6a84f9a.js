!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=document.querySelector("button"),o=null;t.addEventListener("click",(function(){(o=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3))&&n.setAttribute("disabled",!0)})),e.addEventListener("click",(function(){clearInterval(o),n.removeAttribute("disabled")}))}();
//# sourceMappingURL=01-color-switcher.c6a84f9a.js.map
