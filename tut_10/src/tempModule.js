function celsiusToFahrenheit(celsius) {
    return celsius * (9 / 5) + 32;
}

function celsiusToKelvin(celsius) {
    return celsius + 273.15;
}

function fahrenheitToCelsius(fahrenheit) {
    return kelvinToCelsius(fahrenheitToKelvin(fahrenheit));
}

function fahrenheitToKelvin(fahrenheit) {
    return (fahrenheit - 32) * (5 / 9) + 273.15;
}

function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}

function kelvinToFahrenheit(kelvin) {
    return celsiusToFahrenheit(kelvinToCelsius(kelvin));
}

module.exports = {
    celsiusToFahrenheit,
    celsiusToKelvin,
    fahrenheitToCelsius,
    fahrenheitToKelvin,
    kelvinToCelsius,
    kelvinToFahrenheit  
};