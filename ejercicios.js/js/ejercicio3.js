
primo =true
 let numero = 47 
if (numero <=1){
    esPrimo =false

}
else{
   
    for (i =2 ; i<numero; i++){ 
        if (numero % i == 0){ 
            primo =false
        } else{
            return true}   
    }
}   

if(primo) {
    console.log(`${numero}es un numero primo.`)
}
else{
    console.log(`${numero} no es un numero primo.`)
}