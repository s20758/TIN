(()=>{var e={395:e=>{e.exports={kilometersToMiles:function(e){return.62137119*e},milesToKilometers:function(e){return 1.609344*e}}},541:e=>{function t(e){return 1.8*e+32}function n(e){return 5/9*(e-32)+273.15}function u(e){return e-273.15}e.exports={celsiusToFahrenheit:t,celsiusToKelvin:function(e){return e+273.15},fahrenheitToCelsius:function(e){return u(n(e))},fahrenheitToKelvin:n,kelvinToCelsius:u,kelvinToFahrenheit:function(e){return t(u(e))}}}},t={};function n(u){var r=t[u];if(void 0!==r)return r.exports;var i=t[u]={exports:{}};return e[u](i,i.exports,n),i.exports}(()=>{const e=n(395),t=n(541),u=document.getElementById("cels_input"),r=document.getElementById("fahr_input"),i=document.getElementById("kel_input"),l=document.getElementById("km_input"),o=document.getElementById("mil_input");u.addEventListener("input",(e=>{r.value=t.celsiusToFahrenheit(Number(e.target.value)),i.value=t.celsiusToKelvin(Number(e.target.value))})),r.addEventListener("input",(e=>{u.value=t.fahrenheitToCelsius(Number(e.target.value)),i.value=t.fahrenheitToKelvin(Number(e.target.value))})),i.addEventListener("input",(e=>{u.value=t.kelvinToCelsius(Number(e.target.value)),r.value=t.kelvinToFahrenheit(Number(e.target.value))})),l.addEventListener("input",(t=>{o.value=e.kilometersToMiles(Number(t.target.value))})),o.addEventListener("input",(t=>{l.value=e.milesToKilometers(Number(t.target.value))}))})()})();