"use strict";!function(){var c=null;function n(){localStorage.getItem("theme")||(window.matchMedia("(prefers-color-scheme: dark)").matches?t("dark"):window.matchMedia("(prefers-color-scheme: light)").matches&&t("light"))}function a(){var e=document.getElementById("navbar");return e&&null!==(e=e.dataset.theme)&&void 0!==e?e:null}function r(){var e=localStorage.getItem("theme");e&&e!==a()&&t(e)}function t(e){if(c){for(var t=0;t<c.length;t++){var n=c[t];(n instanceof HTMLElement||n instanceof SVGElement)&&(n.dataset.theme=e)}var a,r=document.getElementById("theme-link");"light"===e?r&&r.setAttribute("href","/style/github.css"):r&&r.setAttribute("href","/style/tomorrow-night-bright.css"),a=e,(r=document.getElementById("switch-theme-btn"))&&r instanceof HTMLInputElement&&(r.checked="dark"===a)}}!function(){c=document.querySelectorAll(" [data-themeable] "),n(),r(),function(t){try{window.matchMedia("(prefers-color-scheme: "+t+")").addEventListener("change",function(e){n()})}catch(e){try{window.matchMedia("(prefers-color-scheme: "+t+")").addListener(function(e){n()})}catch(e){console.error(e)}}}("dark");var e=document.getElementById("switch-theme-btn");null!=e&&e.addEventListener("click",function(){!function(){var e=null;{var t;localStorage.getItem("theme")&&"dark"===localStorage.getItem("theme")?e="light":localStorage.getItem("theme")&&"light"===localStorage.getItem("theme")?e="dark":localStorage.getItem("theme")||(t=a(),e=t&&"dark"==t?"light":"dark")}e=null!=e?e:"light",localStorage.setItem("theme",e),r()}()})}(),setInterval(function(){r()},2e3)}();