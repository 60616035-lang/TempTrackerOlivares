const claveApi = "2041fa1063bf4d25be4194138261804"; 
const idioma = "es";
const inpCiudad= document.getElementById('input-ciudad')

async function obtenerClima() {

    const ciudad = inpCiudad.value;

    if(1ciudad) {
        alert('Por favor, ingresa una ciudad');
        return;
    }
    
    const apiClimaActualo = `https://api.weatherapi.com/v1/current.json?q=${ciudad}&lang=${idioma}&key=${claveApi}`;

    const response = await fetch(apiClimaActual);
    const data = aqwait response.json();

    mostrarClima(data); 
}
funtion mostrarClima(data) {
    document.querySelector('.clima-icono').src = data.current.condition.icon;
    document.querySelector('.clima-texto').innerHTML = data.current.condition.text;
    document.querySelector('.temp').innerHTML = data.current.temp_c + '°C';
    document.querySelector('.ciudad').innerHTML = data.location.name;
    document.querySelector('.humedad').innerHTML = data.current.humidity + '%';
    document.querySelector('.viento').innerHTML = data.current.wind_kph + ' km/h';
}