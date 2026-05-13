const inputCelsius = document.getElementById('celsius');
const inputFahrenheit = document.getElementById('fahrenheit');

inputCelsius.addEventListener('input', function(e) {

    const valorCelsius = parseFloat(e.target.value);

    if (isNaN(valorCelsius)) {
        inputFahrenheit.value = '';
        return;
    }

    const valorFahrenheit = (valorCelsius * 9/5) + 32;

    inputFahrenheit.value = valorFahrenheit.toFixed(2);
});

inputFahrenheit.addEventListener('input', function(e) {
    const valorFahrenheit = parseFloat(e.target.value);

    if (isNaN(valorFahrenheit)) {
        inputCelsius.value = '';
        return;
    }

    const valorCelsius = (valorFahrenheit - 32) * 5/9;

    inputCelsius.value = valorCelsius.toFixed(2);
});