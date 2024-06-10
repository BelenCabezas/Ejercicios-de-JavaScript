
let numero1 =25  
let numero2 =13 
let numero3=33 

//OPERACIONES
let suma = numero1+numero2+numero3 

let resta = numero1-numero2-numero3 
                           
let Multiplicacion = numero1 * numero2 * numero3 
                           
let division = numero1 / numero2 / numero3; 

let resto = numero1 % numero2 % numero3;

console.log(`La suma de {numero1}  {numero2} y  {numero3} es {suma}`)
console.log(`la resta de {numero1} {numero2} y  {numero3} es {resta}`) 
console.log(`La multiplicación de ${numero1} ${numero2}  ${numero3} es: ${multiplicacion}`); 
console.log(`La división de ${numero1} ${numero2} y  ${numero3} es: ${division}`);
console.log(`El resto de  ${numero1} ${numero2} ${numero3} es: ${resto}`);                                      


let mayorResultado =math.max(suma,resta,multiplicacion,division,resto)

console.log(`El mayor resultado es: ${mayorResultado}`);