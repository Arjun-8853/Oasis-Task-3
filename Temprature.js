// script.js
document.getElementById('convertButton').addEventListener('click', function() {
    const temperatureInput = document.getElementById('temperatureInput').value;
    const selectedUnit = document.querySelector('input[name="unit"]:checked').value;
    const resultDiv = document.getElementById('result');

    // Validate the input
    if (isNaN(temperatureInput)) {
        resultDiv.textContent = 'Please enter a valid number';
        return;
    }

    const temperature = parseFloat(temperatureInput);
    let convertedTemperature = '';
    let convertedUnit = '';

    if (selectedUnit === 'Celsius') {
        convertedTemperature = (temperature * 9/5) + 32;
        convertedUnit = 'Fahrenheit';
        const kelvinTemp = temperature + 273.15;
        resultDiv.innerHTML = `${temperature}°C is ${convertedTemperature.toFixed(2)}°F or ${kelvinTemp.toFixed(2)}K`;
    } else if (selectedUnit === 'Fahrenheit') {
        convertedTemperature = (temperature - 32) * 5/9;
        convertedUnit = 'Celsius';
        const kelvinTemp = (temperature - 32) * 5/9 + 273.15;
        resultDiv.innerHTML = `${temperature}°F is ${convertedTemperature.toFixed(2)}°C or ${kelvinTemp.toFixed(2)}K`;
    } else if (selectedUnit === 'Kelvin') {
        convertedTemperature = temperature - 273.15;
        const fahrenheitTemp = (temperature - 273.15) * 9/5 + 32;
        convertedUnit = 'Celsius';
        resultDiv.innerHTML = `${temperature}K is ${convertedTemperature.toFixed(2)}°C or ${fahrenheitTemp.toFixed(2)}°F`;
    }
});
