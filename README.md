#Ejercicios de JavaScript

## _Descripcion cada ejercicio_:

🖤 _Ejercicio 1_ Se debe convertir una temperatura en grados Celsius a grados Fahrenheit y determinar si la temperatura en Fahrenheit es alta,baja o moderada.Para esto utilizo la formula 𝐹 =C X 1.8 +32F=C X 1.8+32.

🖤 _Ejercicio 2_ Calcular el indice de masa corporal de una persona y clasificar el resultado. Para esto utilizo la formula IMC =Peso/altura²IMC = altura²peso y la clasifico en normal,sobrepeso u obesidad.

🖤 _Ejercicio 3_ Se determina si un número entero es primo.

🖤 _Ejercicio 4_ Se realizan operaciones aritméticas básicas y se muestra el mayor resultado.

🖤 _Ejercicio 5_ Se calcula el precio final de un producto aplicando un descuento basado en su precio inicial.

## _Para ejecutar los scripts_:
   
🖤 _Ejercicio 1: Conversión de Temperaturas_ La ejecucion de los scripts se realizan linea por linea. En este ejercicio, p se declara una variable denominada celsius donde se almacena la temperatura en Grados celsius. Despues calculo la temperatura en grados Fahrenheit utilizando la formula 𝐹=C×1.8+32 y el resultado lo almaceno en la variable fahrenheit. Se utiliza una sentencia de condicional simple para determinar si la temperatura en grados Fahrenheit es mayor a 85  en ese caso es considerada alta, en cambio si la temperatura es menor que 32 grados, es considerada baja y por ultimo, es moderada. En la ultima linea de codigo, se muestra el resultado por consola.


🖤 _Ejercicio 2: Calculo del IMC_ La ejecución de los scripts se realiza línea por línea. En este ejercicio se declaran dos variables para almacenar el peso en kilogramos y la altura en metros. Luego se calcula el IMC usando la formula 𝐼𝑀𝐶=𝑝𝑒𝑠𝑜/𝑎𝑙𝑡𝑢𝑟𝑎2 IMC=altura2peso y se guarda el resultado en la variable imc. Luego de esto se declara una variable que se llama clasificación que en ella se determina el imc de la persona que puede ser normal, sobrepeso u obesidad. Uso una sentencia if para clasificar el IMC como bajo peso (< 18.5), normal (18.5 - 24.9), sobrepeso (25 - 29.9) u obesidad (>= 30).Como ultimo se muestra por consola el IMC de la persona y su clasificacion.


🖤 _Ejercicio 3: Determinación de Números Primos_ La ejecución de los scripts se realizan línea por línea. En este ejercicio declaro una variable número y le asigno el 47. Este número es el que queremos verificar si es primo o no. Luego declaro una variable primo y la inicializo en verdadero y paso a la instrucción del condicional simple donde pregunto si el número es menor o igual a 1, lo que quiere decir que no es primo, entonces la variable primo cambia su estado a falso. Luego, verifico si el número tiene algún divisor distinto de 1 y de él mismo a través de un bucle que inicia en 2 y va hasta un número menos que el número en cuestión. Si encuentra algún divisor distinto de 1 o de él mismo, la variable primo cambia su estado a falso y se rompe el bucle, indicando que el número no es primo. Finalmente se revisa el estado de la variable primo y se muestra el resultado en la consola indicando si el número es primo o no.Finalmente, se muestran los resultados por consola.


🖤 _Ejercicio 4: Operaciones Aritméticas Básicas_ Se declaran tres variables con valores. Luego se realizan operaciones aritméticas básicas y el resultado de cada una se almacena en una variable dependiendo de la operación. Después se muestran los resultados por consola. Cuarto, se determina cual es el mayor resultado de dichas operaciones. Para eso se aplica una función predefinida de JavaScript que se denomina math.max y ese valor se almacena en la variable mayorResultado. Finalmente se muestra por consola esa variable.


🖤 _Ejercicio 5: Cálculo del Descuento_ Declaro una variable denominada precioInicial con el valor de 350. Luego declaro una variable descuento donde almaceno el descuento a aplicar según las condiciones dadas: Si el precio es mayor a 100, se aplica un descuento del 10%. Si el precio inicial está entre 50 y 100 se le aplica un descuento del 5% Si el precio inicial es menor o igual a 50, no se le aplica el descuento.Después calculo el precio final y almaceno el dato en una variable y por último, muestro el precio final por consola.
