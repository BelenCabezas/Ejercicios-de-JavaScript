
let precioInicial =350

let descuento 

//10%
if(precioInicial >100){
    descuento =0.1 
//5%
} else if (precioInicial >=50 & precioInicial <=100){
    descuento =0.05 
} else{
    descuento =0 
}

let precioFinal = precioInicial - (precioInicial *descuento)


console.log(`el precio final del producto es : ${precioFinal}`)