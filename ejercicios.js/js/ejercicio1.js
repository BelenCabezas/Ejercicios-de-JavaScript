let tempCelsius =25;

let fahrenheit = tempCelsius *1.8 + 32;

let resultado; if(fahrenheit > 85){
    resultado ="alta";

}
else if (fahrenheit <32){
    resultado= "baja"
} else{
    resultado = "moderada"
}

console.log(`La temperatura en Fahrenheit es ${fahrenheit}grados y es {resultado}`);