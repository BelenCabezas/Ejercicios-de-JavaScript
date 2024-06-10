
let peso =90 
let altura = 1.75 


let imc =peso / (altura*altura)

//Clasifico el imc
let clasificacion 

if(imc<18.5){
    clasificacion = "bajo peso"
}
else if (imc>= 18.5 && imc <24.9){
    clasificacion ="normal"
}
else if (imc >=25 && imc <29.9){
    clasificacion = "Sobrepeso"
}
else{
    clasificacion = "obesidad"
}

console.log(`el IMC es ${imc} y la clasificacion es ${clasificacion}`)