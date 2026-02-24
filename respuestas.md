Ejercicio numero 1:

1. la diferencia entre let, var y const es que let es para declarar variables que van a cambiar, var no es recomendable usarla pero es
para que solo se use dentro de una funcion y por ultimo const, que es para declarar variables que no van a cambiar.

2. edad es un dato tipo "Number"

3. una variable es un como una cajita que guarda información para poder usarse después

Ejercicio número 2:

1. Una función es un bloque que almacena diversas tareas que se ejecutan cuando las llamas

2. return es una bandeja de salida que te entrega los datos

3. si una función no tiene return entonces no tendrá una forma de entregar los datos para usarlos después.

Ejercicio número 3:

1. los paraneámetros son los nombres que se les dan a las variables en los paréntesis de una función, por ejemplo, en: function saber (nombre, edad){}, los parámetros están dentro de los paréntesis, los cuales serían nombre y edad.

2. los argumentos son los valores reales que se ingresan cuando uno llama una función, por ejemplo, cuando llamo la función con: saber ("Froshi", 23), lo que esta dentro de la llamada de la función, osea, "Froshi" y 23 serían los argumentos.

3. la diferencia es que los parámetros son las variables que esperan recibir un valor mientras que los argumentos son los valores que recibe una función, estos valores se ingresan cuando uno llama la función.

Ejercicio número 5 (no habia un cuarto ejercicio en el documento, después del tercer ejercicio salía ya el quinto):

1. Un objeto es una estructura de datos que guarda varios tipos de datos, es prácticamente un contenedor que organiza varios datos bajo un solo nombre.

2. Las propiedad son las caracteristicas de un objeto y se define como clave: valor.

3. Se Puede acceder a una propiedad mediante el punto, por ejemplo, si mi objeto es persona = {nombre: "Froshi", edad: 21, profesion: "artista"}, puedo acceder a la propiedad con el punto de la siguiente forma: persona.nombre, o si quiero acceder de otra forma podriamos acceder mediante corchetes: persona["profesion"]

Ejercicio número 6:

1. se puede agregar con la notación de punto, por ejemplo, si quiero agregar la propiedad telefono: persona.telefono = "3013684012", si una propiedad no existe la agregará, si ya existe entonces la modificará, aparte de la notación de puntos hay otra forma de agregar una propiedad y es mediante corchetes: persona = ["telefono"] = "3013684012".

2. Sí, se puede modificar una propiedad de el objeto declarado con const, por qué?, const tiene unas reglas, no permite reasignar variables aunque si permite la modificación de sus propiedades si es un objeto o un array, es como si tuvieras un mapa de una ciudad y la ciudad es un objeto, const no deja cambiar las direcciones de las casas pero si deja entrar a ellas y modificar sus cosas, como pintar la casa o mover sus muebles.

Ejercicio número 7:

1 & 2. Se envía el objeto completo para tener acceso completo a cada propiedad, si necesitamos algo simplemente lo llamamos del objeto, esto tiene una ventaja y la cual es que ayuda a tener una mayor flexibilidad y optimización en el código.

Ejercicio número 8:

Se accede mediante la notación de punto: estudiante.notas.matematicas o mediante corchete estudiante["notas"] ["matematicas"]

Ejercicio número 9:
No habian preguntas

Ejercicio número 10:

1. Si la propiedadad no existe no soltará error, mostrará undefined, aunque si está anidado, osea, si es carro.seguro.propietario y seguro no existe, soltará un error ya que se quedará buscando algo dentro de algo que no existe

2. Es importante validar datos porque por lo regular, un dato mal validado hace que el programa se detenga por el error y no funcione

Ejercicio número 11:

1. Se modifica mediante la notacion de puntos y al final colocandole un valor con el operador de asignación =, quedaria algo así: carro.propietario.edad = 25

2. la diferencia es que modificar es trabajar sobre el mismo o objeto mientras que copiar es crear un clon de ese objeto con los mismo valores en una parte de la memoria diferente a la original, por ejemplo, en una pintura, modificar una pintura seria agregarle detalles, borrarle cosas encima de la misma pintura y copiarla seria dibujar exactamente la misma pintura sin perder ni un detalle, seria el mismo dibujo pero en diferente lienzo. para hacerlo sin spread podria usar el método Object.assign(), 

Ejercicio número 12

1. la destructuración es la forma en sacar las propiedades de los objetos con esos mismos nombres, basicamente, los desempaca.

2. es una forma limpia de trabajar, acortas codigo y facilita el trabajo.

Ejercicio número 13

1. como JavaScript no encuentra el valor entonces le asigna undefined ya que no existe.

2. no es necesario, se puede cambiar el nombre para evitar errores con variables ya definidas.

Ejercicio número 14:

1. Porque queremos entrar al objeto principal y luego entrar al objeto interno, que es lo que hace las llaves que están dentro de las otras llaves

2. Significa extraer datos que ya están dentro de otros.

Ejercicio número 15:

1. Significa que desempaqueta todos los datos que le interesan, lo hace dentro de los paréntesis en la función.

2. La ventaja que tiene es que te ayuda a leer el código mas fácil porque encuentras todos los datos que ingresan a la función al leer las primeras lineas de la función

Ejercicio número 16:

1. Porque ya se destructuró en los parámetros de la función, los puntos me ayudan a acceder a las propiedades de un objeto, y si ya lo destructuré antes entonces significa que los valores ya estan desempacados en variables distintas y no en una sola.

2. Si no tiene esa propiedad, JavaScript le asigna el valor undefined

Ejercicio número 17:

sí, si le puedo dar un nuevo nombre a una propiedad.

1. Es una caracteristica que me permite cambiarle el nombre de una propiedad de un objeto a una variable con un nombre distinto.

2. Es util para que no haya conflicto con otras variables con el mismo nombre.

Ejercicio número 18:

1. Lo que hace el operador spread (...) es descomponer los elementos de un objeto dentro de otro, basicamente crea una copia.

2. La copia es superficial, lo que hará que si modificas un valor de un objeto que está dentro de otro, se reflejará en la copia.

Ejercicio número 19:

1 & 2. El objeto interno también se debe copiar porque la copia que hace el spread (...) es superficial y no copia los datos que están dentro de otros datos, lo que hace es usar el mismo lugar de la memoria por lo que si modificas el original en esa parte, también se reflejará en la copia y viceversa.

Ejercicio número 20:

1. no es muy recomendable si se tiene muchos niveles, osea, un objeto dentro de otro que está dentro de otro y finalemente dentro de otro, entre más largo sea, más confuso se vuelve para otro programador haciendo confusa la lectura.

2. cuando tengo que renombrar muchas variables y cuando la linea de codigo se vuelve muy larga.

3. null o indefined son comunes que salgan debido a el olvido del nombre de las variables o nombres de la propiedad.