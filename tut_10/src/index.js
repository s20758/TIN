const distance = require("./distModule");
const temperature = require("./tempModule");

const celsius = document.getElementById("cels_input");
const fahrenheit = document.getElementById("fahr_input");
const kelvin = document.getElementById("kel_input");

const kilometers = document.getElementById("km_input");
const miles = document.getElementById("mil_input");

celsius.addEventListener("input", (c) => {
   fahrenheit.value = temperature.celsiusToFahrenheit(Number(c.target.value));
   kelvin.value = temperature.celsiusToKelvin(Number(c.target.value));
});

fahrenheit.addEventListener("input", (f) => {
   celsius.value = temperature.fahrenheitToCelsius(Number(f.target.value));
   kelvin.value = temperature.fahrenheitToKelvin(Number(f.target.value));
});

kelvin.addEventListener("input", (k) => {
   celsius.value = temperature.kelvinToCelsius(Number(k.target.value));
   fahrenheit.value = temperature.kelvinToFahrenheit(Number(k.target.value));
});

kilometers.addEventListener("input", (km) => {
   miles.value = distance.kilometersToMiles(Number(km.target.value));
});

miles.addEventListener("input", (m) => {
   kilometers.value = distance.milesToKilometers(Number(m.target.value));
});